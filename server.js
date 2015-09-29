var express = require('express');

var PORT = 3001;

var app = express();

var client = require('./client/');
var server = require('./server/');

app.use('/tugas2/client', client);
app.use('/tugas2/server', server);

app.listen(PORT, function () {
  console.log('App is listening on port', PORT);
});
