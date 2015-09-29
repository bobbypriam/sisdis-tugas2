var expect = require('chai').expect;

var handlers = require('../../client/handlers');

describe('Client', function () {

  describe('Route: /tugas2/client/:image', function () {

    describe('If image exists', function () {
      var image = 'chairs.jpg';

      it('should render correct html', function () {
        handlers.getImage({
          params: { image: image }
        }, {
          send: function (html) {
            throw new Error('not implemented');
          }
        });
      });
    });

    describe('If image doesn\'t exist', function () {
      var image = 'nonexistent.png';

      it('should render correct html', function () {
        handlers.getImage({
          params: { image: image }
        }, {
          send: function (html) {
            throw new Error('not implemented');
          }
        });
      });
    });

  });

});
