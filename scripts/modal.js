(function () {
  'use strict';
  var app = angular.module('redditize'); //jshint ignore:line
  app.controller('modal', function($scope, $rootScope) {
    this.title = '';
    this.author = '';
    this.image_url = '';
    this.description = '';
    $rootScope.posts = [
      {
        id:1,
        title: 'Danger Days',
        author: 'My Chemical Romance',
        image_url: 'http://theywillrockyou.com/wp-content/uploads/2010/10/MCR_album_COVER-1024x1024.jpg',
        rating: 6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
          {
            name: 'Dog',
            comment: 'They rock.'},
          {
            name: 'Cat',
            comment: 'They sucks.'}
          ],
          timeStamp: new Date('Fri Oct 14 2016 17:10:33 GMT-0600 (MDT)'),
          show: true
        },
        {
          id:2,
          title: 'Cover for Under the scythe',
          author: 'Eugene',
          image_url: 'http://65.media.tumblr.com/703ef37f254232dc61e2f358caf90eff/tumblr_nr8lo1FCxs1ua0y99o1_1280.jpg',
          rating: -2,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          comments: [
            {
              name: 'Dog',
              comment: 'They sucks.'},
            {
              name: 'Cat',
              comment: 'They rocks.'}
            ],
            timeStamp: new Date('Sat Oct 15 2016 13:10:33 GMT-0600 (MDT)'),
            show: true
          }
      ];

    this.addPost  = () => {
      const newPost = {
      id: $rootScope.posts.length + 1,
      title: this.title,
      author: this.author,
      image_url: this.image_url,
      description: this.description,
      rating: 0,
      comments: [],
      timeStamp: new Date(),
      show: true
      };
      $rootScope.posts.push(newPost);
      console.log($rootScope.posts);
      $scope.dismiss();
    };
  });

  app.directive('myModal', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        scope.dismiss = function() {
          element.modal('hide');
        };
      }
    };
  });

})();
