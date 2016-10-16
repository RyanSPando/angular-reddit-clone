(function () {
  var app = angular.module('redditize'); //jshint ignore:line

  app.controller('addCommentController', function($scope, $rootScope) {
    this.name = '';
    this.comment = '';

    this.addComment = (index) => {
      const newComment = {
        name: this.name,
        comment: this.comment,
        timeStamp: new Date()
      };

      $rootScope.posts[index].comments.unshift(newComment);
      $rootScope.posts[index].showAddComments = false;
      this.name = '';
      this.comment = '';
      $scope.postForm.$setPristine();
    };

  });
})();
