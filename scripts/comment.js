(function () {
  var app = angular.module('redditize'); //jshint ignore:line

  app.controller('commentController', function($rootScope) {

    this.toggleComments = (index) => {
      if ($rootScope.posts[index].showComments)
      {
        $rootScope.posts[index].showComments = false;
      }
      else {
        $rootScope.posts[index].showComments = true;
      }
    };

    this.toggleAddComment = (index) => {
      if ($rootScope.posts[index].showAddComments)
      {
        $rootScope.posts[index].showAddComments = false;
      }
      else {
        $rootScope.posts[index].showAddComments = true;
      }
    };
  });
})();
