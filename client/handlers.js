var handlers = {};

var templateHeader = '<!DOCTYPE html><html><head><title>Tugas 2 Sisdis</title></head><body>';
var templateFooter = '</body></html>';

handlers.getImage = function (req, res) {
  var html = [
    templateHeader,
    '<img id="image" />',
    '<p id="location"></p>',
    '<p id="size"></p>',
    '<p id="not-found"></p>',
    templateFooter
  ].join('');

  res.send(html);
};

module.exports = handlers;
