var express = require('express');
var app = express();

app.use(express.static('./src/client/public'));

app.use('/api/', require('./config/router'))

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});