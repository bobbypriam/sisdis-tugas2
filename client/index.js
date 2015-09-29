var express = require('express');

var app = express();
var handlers = require('./handlers');

app.get('/:image', handlers.getImage);

module.exports = app;
