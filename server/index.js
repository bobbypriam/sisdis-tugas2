var express = require('express');

var PORT = 3001;

var app = express();

app.get('/', function (req, res) {
  res.json({ message: 'Hello' });
});

app.listen(PORT, function () {
  console.log('App is listening on port', PORT);
});
