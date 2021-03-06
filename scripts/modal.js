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
        id: 0,
        title: 'Danger Days',
        author: 'My Chemical Romance',
        image_url: 'http://theywillrockyou.com/wp-content/uploads/2010/10/MCR_album_COVER-1024x1024.jpg',
        rating: 6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
          {
            name: 'Dog',
            comment: 'They rock.',
            timeStamp: new Date('Fri Oct 14 2016 17:30:33 GMT-0600 (MDT)')
          },
          {
            name: 'Cat',
            comment: 'They sucks.',
            timeStamp: new Date('Fri Oct 14 2016 18:10:33 GMT-0600 (MDT)')
          }
        ],
        timeStamp: new Date('Fri Oct 14 2016 17:10:33 GMT-0600 (MDT)'),
        showComments: false,
        showAddComments: false
      },
      {
        id: 1,
        title: 'Cover for Under the scythe',
        author: 'Eugene',
        image_url: 'http://65.media.tumblr.com/703ef37f254232dc61e2f358caf90eff/tumblr_nr8lo1FCxs1ua0y99o1_1280.jpg',
        rating: -2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [
          {
            name: 'Dog',
            comment: 'They sucks.',
            timeStamp: new Date('Sat Oct 15 2016 13:30:33 GMT-0600 (MDT)')
          },
          {
            name: 'Cat',
            comment: 'They rocks.',
            timeStamp: new Date('Sat Oct 15 2016 14:10:33 GMT-0600 (MDT)')
          }
        ],
        timeStamp: new Date('Sat Oct 15 2016 13:10:33 GMT-0600 (MDT)'),
        showComments: false,
        showAddComments: false
        }
      ];

    this.addPost  = () => {
      const newPost = {
      id: $rootScope.posts.length,
      title: this.title,
      author: this.author,
      image_url: this.image_url,
      description: this.description,
      rating: 0,
      comments: [],
      timeStamp: new Date(),
      showComments: false,
      showAddComments: false
      };
      $rootScope.posts.push(newPost);
      $scope.dismiss();
      this.title = '';
      this.author = '';
      this.image_url = '';
      this.description = '';
      $scope.modalForm.$setPristine();
    };
  });
  //directive to hide modal
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
