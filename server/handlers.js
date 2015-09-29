var handlers = {};

handlers.getImage = function (req, res) {
  var existingImages = ['tes.png'];
  var filename = req.params.image;

  var image = {};

  if (existingImages.indexOf(filename) !== -1) {
    image = {
      isi_berkas: '',
      lokasi_berkas: '',
      ukuran_berkas: ''
    };
  }

  return res.json(image);
};

module.exports = handlers;
