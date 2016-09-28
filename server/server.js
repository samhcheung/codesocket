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

require('dotenv').load();
var path = require('path');
var AccessToken = require('twilio').jwt.AccessToken;
var ConversationsGrant = AccessToken.ConversationsGrant;
var randomUsername = require('./randos');
var express = require('express');
var app = express();
var http = require('http').Server(app);
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
var io = require('socket.io')(http);
var commands = [];
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('typed', function(delta) {
    commands.push(delta);
    // console.log(commands)
    socket.emit('serverokay', delta)
    // socket.broadcast.emit('receive', delta);

  });
  socket.on('removedfromarr', function(delta) {
    console.log(commands);
    if(commands.length > 1) {
      var tempCurrent = JSON.parse(commands[0])
      for(var i = 1; i < commands.length; i++) {
        var tempNeedsTransform = JSON.parse(commands[i]);
        if (tempNeedsTransform[0].retain &&  (tempNeedsTransform[0].retain <= tempCurrent[0].retain || !tempCurrent[0].retain)) {
          tempNeedsTransform[0].retain += tempCurrent[1].insert.length;
          commands[i] = JSON.stringify(tempNeedsTransform);
        }
      }
    }
    delta = commands.splice(0,1);
    socket.broadcast.emit('receive', delta);
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
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


http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});