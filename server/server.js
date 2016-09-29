// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// var server = new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('Listening at http://localhost:3000/');
// });
var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackconfig = require('../webpack.config.js'),
    webpackcompiler = webpack(webpackconfig);
 
//enable webpack middleware for hot-reloads in development
function useWebpackMiddleware(app) {
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath: webpackconfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    }));
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }));
 
    return app;
}

var fs = require('fs'); // To load the key and cert files
var https = require('https'); // https required for WebRTC
var os = require('os');

var path = require('path');
var express = require('express');
var app = express();
//var http = require('http').Server(app);

var httpsServer = https.createServer({
  key: fs.readFileSync('./server/key.pem'),
  cert: fs.readFileSync('./server/cert.pem')
}, app);

    // webpackDevHelper = require('./index.dev.js');
useWebpackMiddleware(app);

app.use(express.static('./src/client'));
app.get('/', function(req, res) {
	res.send();
})
app.get('/sam', function(req, res) {
	res.send('hiiidfd')
})


// Begin socket component
var io = require('socket.io')(httpsServer);
var commands = [];
// This object has {aRoomName: # of users in this room}
var roomClients = {};

io.on('connection', function(socket){

  // *********** Begin WebRTC Socket ************
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    socket.emit('log', array);
  }

  socket.on('message', function(message) {

    log('Client said: ', message);

    var clientID = socket.id;
    //console.log(Object.keys(socket.rooms));
    // clientRooms is an array of all the rooms I am in.
    var clientRooms = Object.keys(socket.rooms).filter(function(aRoom) {
      return (aRoom === clientID) ? false : true;
    });
    
    // Relay the message to each user in my room
    clientRooms.forEach(function(aRoom) {
      io.sockets.in(aRoom).emit('message', message);
      if (message === 'bye' + aRoom) {
        if (roomClients[aRoom] > 0) {
          roomClients[aRoom]--;
        }
      }
    });

    //socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function(room) {
    //console.log(room, '===== ROOM');
    log('Received request to create or join room ' + room);

    if (io.sockets.sockets.length === 0) {
      roomClients = {};
    }
    if ((!roomClients[room]) || (roomClients[room] === 0)) {
      roomClients[room] = 1;
    } else {
      roomClients[room]++;
    }

    var numClients = roomClients[room];

    //var numClients = io.sockets.sockets.length;
    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === 1) {
      socket.join(room);
      log('Client ID ' + socket.id + ' created room ' + room);
      
      //socket.emit('created', room, socket.id);

      io.sockets.in(room).emit('created', room, socket.id);

    } else if (numClients === 2) {
      socket.join(room);
      log('Client ID ' + socket.id + ' joined room ' + room);
      io.sockets.in(room).emit('join', room);
      //socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('joined', room, socket.id);

      io.sockets.in(room).emit('ready');  
    } else { // max two clients

      io.sockets.in(room).emit('full', room);
      //socket.emit('full', room);
    }
  });

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          io.sockets.in(room).emit('ipaddr', details.address);
          //socket.emit('ipaddr', details.address);
        }
      });
    }
  });

  socket.on('bye', function(){
    console.log('received bye');
  });
  // *********** End WebRTC Socket ************
  
  // *********** Begin Quill Socket ************
  console.log('a user connected');
  socket.on('typed', function(delta) {
    commands.push(delta)
    console.log(commands);
    socket.broadcast.emit('receive',delta);

  });


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('changesToApply', function(index){
    console.log('oldIndex', index);
    socket.broadcast.emit('done', index);
  })
  // *********** End Quill Socket ************
});




// app.use('/api/', require('./config/router'))

// ***************************** Begin Video Component *****************************
/*
Generate an Access Token for a chat application user - it generates a random
username for the client requesting a token, and takes a device ID as a query
parameter.
*/
app.get('/token', function(request, response) {
  var identity = randomUsername();

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  //console.log(process.env);
  var token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token
  token.identity = identity;

  //grant the access token Twilio Video capabilities
  var grant = new ConversationsGrant();
  grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});
// ***************************** End Video Component *****************************


httpsServer.listen(3000, function () {
  console.log('Example https app listening on port 3000!');
});