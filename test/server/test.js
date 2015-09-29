var expect = require('chai').expect;

var handler = require('../../server/handlers');

describe('API Server', function () {

	describe('Route: /tugas2/server/:image', function () {

		describe('If image exists', function () {
			var image = 'chairs.jpg';

			it('should return an object containing "isi_berkas", "lokasi_berkas", and "ukuran_berkas"', function () {
				handler.getImage({
					params: { image: image }
				}, {
					json: function (data) {
						expect(data).to.have.property('isi_berkas');
						expect(data).to.have.property('lokasi_berkas');
						expect(data).to.have.property('ukuran_berkas');
					}
				});
			});
		});

		describe('If image doesn\'t exist', function () {
			var image = 'nonexistent.png';

			it('should return an empty object', function () {
				handler.getImage({
					params: { image: image }
				}, {
					json: function (data) {
						expect(data).to.be.empty;
					}
				});
			});
		});

	});

});
