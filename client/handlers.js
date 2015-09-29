var request = require('request');

var handlers = {};

var API_URL = 'http://localhost:3001/tugas2/server';

var templateHeader = '<!DOCTYPE html><html><head><title>Tugas 2 Sisdis</title></head><body>';
var templateFooter = '</body></html>';

handlers.getImage = function (req, res) {
  var imageName = req.params.image;
  var type = imageName.split('.')[1];
  var url = API_URL + '/' + imageName;

  request(url, function (err, response, body) {
    if (err) {
      return res.send('error');
    }

    var data = JSON.parse(body);

    var html = [];
    html.push(templateHeader);

    if (data.isi_berkas) {
      html.push('<img id="image" src="data:image/' + type + ';base64,' + data.isi_berkas + '" />');
      html.push('<p id="location">' + data.lokasi_berkas + '</p>');
      html.push('<p id="size">' + data.ukuran_berkas + '</p>');
    } else {
      html.push('<p id="not-found">The image you requested is not found.</p>');
    }

    html.push(templateFooter);

    res.send(html.join(''));
  });
};

module.exports = handlers;
