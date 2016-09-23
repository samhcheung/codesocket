var express = require('express');
var app = express();

app.use(express.static('react-hello-world/src/client/public'));

app.use('/api/', require('./config/router'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});