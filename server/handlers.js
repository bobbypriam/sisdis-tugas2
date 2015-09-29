var fs = require('fs');
var path = require('path');

var IMAGE_DIR = path.join(__dirname, '..', 'images');

var handlers = {};

handlers.getImage = function (req, res) {
  var imageName = req.params.image;
  var filePath = path.join(IMAGE_DIR, imageName);

  fs.readFile(filePath, function (err, data) {
    if (err) {
      return res.json({});
    }

    var base64 = (new Buffer(data, 'binary')).toString('base64');

    res.send({
      isi_berkas: base64,
      lokasi_berkas: filePath,
      ukuran_berkas: ''
    });
  });
};

module.exports = handlers;
