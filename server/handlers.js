var fs = require('fs');
var path = require('path');
var async = require('async');

var IMAGE_DIR = path.join(__dirname, '..', 'images');

var handlers = {};

handlers.getImage = function (req, res) {
  var imageName = req.params.image;
  var filePath = path.join(IMAGE_DIR, imageName);

  async.parallel({

    file: function readFile(callback) {
      fs.readFile(filePath, function (err, data) {
        if (err) {
          return callback(err);
        }

        var base64 = (new Buffer(data, 'binary')).toString('base64');

        return callback(null, base64);
      });
    },

    size: function getFileSize(callback) {
      fs.stat(filePath, function (err, stats) {
        if (err) {
          return callback(err);
        }

        return callback(null, bytesToSize(stats.size));
      });

      // Convert bytes to human readable size.
      function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + sizes[i];
      };
    }

  }, function endParallel(err, result) {
    if (err) {
      return res.json({});
    }

    return res.json({
      isi_berkas: result.file,
      lokasi_berkas: filePath,
      ukuran_berkas: result.size
    });
  });
};

module.exports = handlers;
