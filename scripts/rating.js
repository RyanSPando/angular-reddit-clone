(function () {
  var app = angular.module('redditize'); //jshint ignore:line

  app.controller('ratingController', function($rootScope) {

    this.upVote = (index) => {
      ++$rootScope.posts[index].rating;
    };

    this.downVote = (index) => {
      --$rootScope.posts[index].rating;
    };

  });
})();
