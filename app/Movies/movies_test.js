'use strict';

describe('myApp.movies module', function() {

  beforeEach(module('myApp.movies'));

  describe('movies controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var MoviesCtrl = $controller('MoviesCtrl');
      expect(moviesCtrl).toBeDefined();
    }));

  });
});