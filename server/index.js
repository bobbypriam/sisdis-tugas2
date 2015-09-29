var express = require('express');

var PORT = 3001;

var app = express();

var handlers = require('./handlers');

app.get('/', function (req, res) {
  res.json({ message: 'Hello' });
});

app.get('/:image', handlers.getImage);

app.listen(PORT, function () {
  console.log('App is listening on port', PORT);
});
