(function () {
  'use-strict';

  var app = angular.module('redditize', ['angularMoment']); //jshint ignore:line

  //directive added to let angular close a bootstrap modal
  app.directive('myModal', function() {
   return {
     restrict: 'A',
     link: function(scope, element, attr) {
       scope.dismiss = function() {
           element.modal('hide');
       };
     }
   } ;
});
})();
