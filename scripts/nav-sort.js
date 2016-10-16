(function () {
  var app = angular.module('redditize'); //jshint ignore:line

  app.controller('sortController', function($rootScope) {
    $rootScope.sortString = '';
    $rootScope.orderString = '-rating';
    this.selectValue = 'by Votes';

    this.setVotes = () => {
      this.selectValue = 'by Votes';
      $rootScope.orderString = '-rating';
    };
    this.setDate = () => {
      this.selectValue = 'by Date';
      $rootScope.orderString = '-timeStamp';
    };
    this.setAlpha = () => {
      this.selectValue = 'Alphabetically';
      $rootScope.orderString = 'title';
    };
  });
})();
