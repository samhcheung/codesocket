var {app} = require('./server.js');
var port = 3000;

app.listen(port, function () {
  console.log('listening on port ' + port);
});