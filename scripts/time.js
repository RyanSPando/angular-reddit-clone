(function () {
  var app = angular.module('redditize'); //jshint ignore:line

  app.controller('timeController', function() {

    this.time = new Date();
    
  });
})();
