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

// var db = require('./db/index.js');
var helper = require('./utils/helper.js')

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

var bodyParser = require('body-parser');

var path = require('path');
var express = require('express');
var app = express();
//var http = require('http').Server(app);
var db = require('./db/index.js');

var passport = require('passport');
var passportGithub = require('./auth/github');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var redis   = require("redis");
var client  = redis.createClient();


var httpsServer = https.createServer({
  key: fs.readFileSync('./server/key.pem'),
  cert: fs.readFileSync('./server/cert.pem')
}, app);

app.use(session({
  store: new redisStore({client: client}),
  secret: 'the_best_ajaxta_secret_ever',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: 1000 * 60 * 60 * 24 }
}));

// app.use(session({
//   secret: 'the_best_ajaxta_secret_ever',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: true, maxAge: 1000 * 60 * 60 * 24 }
// }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    console.log(res.req.session.passport.user, '<---')
    console.log(req.isAuthenticated(), '<-----------------')

    res.redirect('/secure');
  }
);

app.get('/login', function(req, res) {
  res.send('Go back and register!');
});

app.get('/logout', function(req, res) {

  // if(req.session.key) {
  req.session.destroy();

  req.logout()

  // req.session.destroy(function(){
    // res.redirect('/');
  // });
  // } else {
  res.redirect('/');
  // }
});

app.get('/secure', helper.checkLogin, function(req, res) {
  // res.send('Successfully logged in');
  res.redirect('/')
});
app.get('/access', helper.checkLogin, function(req, res) {
  res.send(req.session.passport.user);
})

var history = {
  // 'room1': {
//      'history1': [{},{}],
//      'history2': [{},{}],
  // }
    // 'room2': {
//      'history1': [{},{}],
//      'history2': [{},{}],
  // }
}

//var serverState = '\n';
var serverState = {};

    // webpackDevHelper = require('./index.dev.js');
useWebpackMiddleware(app);

app.use(express.static('./src/client'));
//add bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This never triggers?
app.get('/', function(req, res) {
  console.log('in /')
	res.send('Hello World');
});

// var check = function(req, res, next) {
//   console.log('got thru check');
//   next();
// };



app.get('/doclist', function(req, res) {
  console.log(req.user, '<=== req.user from doclist in server.js');
  helper.fetchrooms(function(docs){
    res.send(docs);
  })
})

app.post('/savedoc', helper.checkLogin, function(req, res) {
  console.log('in save doc')
  db.Doc.update({
    doc_name:req.body.room,
    doc_content: req.body.contents
  },
  {
    where: {doc_name:req.body.room}
  }).then(function(result) {
    console.log('in then of savedoc', result)
    res.status(201).send(result)
  });


})

var oTransform = function(newObj, oldObj, callback){
  console.log('----------------------in oTransform')

  console.log('newop', newObj);
  console.log('old', oldObj);
  var newOp = newObj.op[0];
  var oldOp = oldObj.op[0];

  var newInsertion = newOp.retain;
  var oldInsertion = oldOp.retain;

  console.log('newInsertion', newInsertion);
  console.log('oldinsertion', oldInsertion);
  if(newInsertion >= oldInsertion){
    //newInsertion++;
    newOp.retain = newInsertion;
  } else {
    // oldInsertion++;
    // oldOp.retain = oldInsertion;
  }
  console.log('2newop', newOp);
  console.log('2old', oldOp);
  callback(newObj);
  // if(oldOp.)
  //if item has insert as key
  //ir item has retain as key
}
var falseCounter = 0;
// app.post('/addops', function(req, res){
var isValid = function(operation, room){
  //console.log('is valide operation', operation, serverState[room])
  if(operation.history === serverState[room]){
    console.log('true', operation);
    return true;
  } else {
    if (falseCounter < 20) {
      console.log('false', operation);
      falseCounter++;
    }

    return false;
  }
}

var updateServerState = function(operation, room){
  console.log('in update server state', operation)
  var retain = operation.op[0].retain;
  var insert = operation.op[1].insert;
  var deleteop = operation.op[1].delete;
  if(operation.op[2] !== undefined) {
    deleteop = operation.op[2].delete;
  }
  console.log('before serverState', serverState);
  console.log('retain', retain);
  console.log('insert', insert);

  if(serverState[room] === '\n'){
    console.log('in true condition')
    if(insert!== undefined) {
      serverState[room] = insert + '\n';
    }
  } else {
    if (deleteop !== undefined) {
      serverState[room] = serverState[room].slice(0, retain) + serverState[room].slice(retain+deleteop);
    }
    if(insert!== undefined) {
      serverState[room] = serverState[room].slice(0, retain) + insert + serverState[room].slice(retain);
    } 
  }
  console.log('after serverState', serverState[room]);
}

var docExists = function(user, room, callback) {
  helper.docExists(user, room, callback);
}

app.get('/roomExists', function(req, res){
  var user = req.query.user;
  var room = req.query.room;

  docExists(user, room, function(exists){
     //console.log('exists', exists);
     if(!exists){
       // helper.addDocToDB(req.query.user, req.query.room, function(newDoc){
         // helper.addDoctoUser(req.query.user, req.query.room, function(result){
           res.send(false);
         // })
       // })
     } else {
       res.send(true);
     }  
  });
})

app.post('/addroom', function(req, res){
  var room = req.body.room;
  //console.log('server sees username to save', room)
  helper.addDocToDB(room, function(result){
    res.send(result);
  });
});

app.post('/addroomtouser', function(req, res){
  var room = req.body.room;
  var user = req.body.user;
  //console.log('server sees username to save', room, user)
  helper.addDoctoUser(user, room, function(result){
    res.send(result);
  });

  // helper.addDocToDB(req.query.user, req.query.room, function(newDoc){
  //   helper.addDoctoUser(req.query.user, req.query.room, function(result){
  //     res.send(false);
  //   })
  // })


  // helper.docExists(req.query.user, req.query.room, function(exists){
  //   console.log('exists', exists);
  //   if(!exists){
  //     helper.addDocToDB(req.query.user, req.query.room, function(newDoc){
  //       helper.addDoctoUser(req.query.user, req.query.room, function(result){
  //         res.send(false);
  //       })inFlightOp

  //     })
  //   } else {
  //     res.send(true);
  //   } 
  // })
});

app.post('/addroomtouser', function(req, res){
  // helper.
  var room = req.body.room;
  var user = req.body.user;
  //console.log('in add room to user', room, user)
  helper.addDoctoUser(user, room, function(result){
    res.send(result);
  });
})

app.post('/adduser', function(req, res){
  var user = req.body.user;
  //console.log('server sees username to save', user)
  helper.saveuser(user, function(result){
    res.send(result);
  });
})

// Begin socket component
var io = require('socket.io')(httpsServer);
var commands = [];

io.on('connection', function(socket){
  console.log('on connection')
  // *********** Begin WebRTC Socket ************
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    socket.emit('log', array);
  }

  socket.on('add inflight op', function(inFlightOp){
    // console.log('----------------------started')
    var inFlightOp = JSON.parse(inFlightOp)
    // console.log('inFlightOp', inFlightOp);
    // console.log('pre History', history)
    if(isValid(inFlightOp, inFlightOp.room)){

      // console.log('in valid, about to emit clear inflight op')
      //io.to(socket.id).emit('clear inflight', inFlightOp);

      if(history[inFlightOp.room] !== undefined && history[inFlightOp.room][inFlightOp.history] !== undefined){
        //change was there already
        // console.log('before transformed. should be obj', inFlightOp);
        //transform
        //console.log('before otransform passing in ', history[inFlightOp.room])
        console.log('before otransform passing in ', history[inFlightOp.room][inFlightOp.history][0])
        oTransform(inFlightOp, history[inFlightOp.room][inFlightOp.history][0], function(transformed){
          // console.log('transformed. should be obj', transformed);
          // console.log('room', inFlightOp.room);
          updateServerState(inFlightOp, inFlightOp.room);
          // console.log('----------------------emited')
          io.to(socket.id).emit('clear inflight', inFlightOp);
          history[inFlightOp.room][inFlightOp.history].push(transformed)
          io.sockets.in(inFlightOp.room).emit('newOp', transformed);
        })

      } else if (history[inFlightOp.room] === undefined) {
        // console.log('no room yet')
        history[inFlightOp.room] = {};
        // console.log(inFlightOp.history)
        var myhistory = inFlightOp.history;
        io.to(socket.id).emit('clear inflight', inFlightOp);
        history[inFlightOp.room][myhistory] = [inFlightOp];
        // console.log('room:-', inFlightOp.room)
          console.log('----------------------emited')
        updateServerState(inFlightOp, inFlightOp.room);
        io.sockets.in(inFlightOp.room).emit('newOp', inFlightOp);

      } else {
        console.log('room but no myhistory/conflict')
        var myhistory = inFlightOp.history;
        io.to(socket.id).emit('clear inflight', inFlightOp);
        history[inFlightOp.room][myhistory] = [inFlightOp];
        // console.log('room:-', inFlightOp.room)
          console.log('----------------------emited')
        updateServerState(inFlightOp, inFlightOp.room);
        io.sockets.in(inFlightOp.room).emit('newOp', inFlightOp);
      }
      
    } else {
      //console.log('-------------in rejected-----------', inFlightOp, serverState[inFlightOp.room])

      io.to(socket.id).emit('rejected op', inFlightOp)
    }
  })

  socket.on('message', function(message) {

    log('Client said: ', message);
    // clientRooms is an array of all the rooms I am in.
    var clientRooms = Object.keys(socket.rooms).filter(function(aRoom) {
      return (aRoom === socket.id) ? false : true;
    });
    
    // Relay the message to each user in my room
    clientRooms.forEach(function(aRoom) {
      socket.broadcast.to(aRoom).emit('message', message);
    });
  });

  socket.on('create or join', function(room) {
    console.log(room, '===== ROOM');
    // var fetch = function(exists) {
    //   if(exists){
    //     console.log('doc exists')
    //     helper.fetchDocContent(room, socket);
    //   } else {
    //     console.log('doc does not exists')

    //     // socket.disconnect();
    //     //emit room doesn't exist.
    //     //create listener for roomdoes't exist;
    //   }
    // }
    // var exists = helper.docExists(room, fetch);
    // console.log('exists', exists);

    console.log('create or join');

    log('Received request to create or join room ' + room);
    console.log('Received request to create or join room ' + room);

    var users = Object.keys(socket.rooms).length;
    var numClients;
    var socketRoom = io.sockets.adapter.rooms[room];
    console.log(io.sockets.adapter.rooms);

    if (socketRoom) {
      numClients = socketRoom.length + 1;
    } else {
      numClients = 1;
    }

    console.log('numClients', numClients)
    //var numClients = io.sockets.sockets.length;
    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === 1) {
      console.log('one client')
      socket.join(room);
      
      // Reset serverState and history on being the first to enter a doc.
      serverState[room] = '\n';
      delete history[room];

      log('Client ID ' + socket.id + ' created room ' + room);
      
      //socket.emit('created', room, socket.id);

      io.sockets.in(room).emit('created', room, socket.id);

      // docExists(socket.id, room, function(exists){
      //   if(exists){
      db.Doc.findOne({where: {
        doc_name: room
      }})
      .then(function(doc) {
        //console.log('found doc', doc)
        if (JSON.parse(doc['doc_content'])) {
          serverState[room] = JSON.parse(doc['doc_content'])[0].insert;
        }
        io.to(socket.id).emit('found latest doc', doc);
      });
      io.sockets.in(room).emit('ready');


    } else if (numClients === 2) {

      //console.log('more than one user!')
      //console.log('two clients',room, socket.id)
      socket.join(room);

      //console.log('---AFTER JOIN ROOM -----')
      log('Client ID ' + socket.id + ' joined room ' + room);
      io.sockets.in(room).emit('join', room);
            //console.log('---AFTER JOIN emit -----')

      //socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('joined', room, socket.id);
            //console.log('---AFTER JOINed emit -----')

      io.sockets.in(room).emit('ready');
            //console.log('---AFTER ready emit -----')

      socket.broadcast.to(room).emit('fetch live version', socket.id);
            //console.log('---AFTER fetch live emit -----')

    } else { // max two clients for video.  3+ join as code-collab only
      //io.sockets.in(room).emit('full', room);
      socket.join(room);
      socket.broadcast.to(room).emit('fetch live version', socket.id);
      //socket.emit('full', room);
    }
    console.log('Room ' + room + ' now has ' + numClients + ' users.');

  });

  socket.on('live version', function(latest){
    //console.log('got live v---------', latest);
    var requestId = latest.requestId;
    var delta = latest.delta;
    io.to(requestId).emit('fetched live', delta)
  });

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          io.sockets.in(room).emit('ipaddr', details.address);
        }
      });
    }
  });

  socket.on('bye', function(){
    console.log('received bye');
  });
  // *********** End WebRTC Socket ************
  
  // *********** Begin Quill Socket ************
  //console.log('a user connected');
  // socket.on('typed', function(delta) {
  //   commands.push(delta)
  //   console.log(commands);
  //   // socket.broadcast.emit('receive',delta);
  //   // console.log('socket id', socket.id)
  //   // console.log('socket rooms', socket.rooms)

  //   var clientID = socket.id;
  //   var clientRooms = Object.keys(socket.rooms).filter(function(aRoom) {
  //     return (aRoom === clientID) ? false : true;
  //   });
  //   console.log('rooms', clientRooms, clientID)
  //   clientRooms.forEach(function(aRoom) {
  //     console.log('===========', aRoom, clientID)
  //     socket.broadcast.to(aRoom).emit('receive', delta);
  //   });
  // });

  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });

  // socket.on('changesToApply', function(index){
  //   console.log('oldIndex', index);
  //   socket.broadcast.emit('done', index);
  // })

  // socket.emit('fetch rooms', 'get existing rooms');
  // socket.on('got room list', function(docs){  

  // *********** End Quill Socket ************
});


// app.use('/api/', require('./config/router'))

httpsServer.listen(3000, function () {
  console.log('Example https app listening on port 3000!');
});

module.exports.io = io;
module.exports.app = app;


