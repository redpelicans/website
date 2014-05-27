'use strict';

var directives = angular.module('rpApp.directives', []);

directives.directive('rpLine', function() {
  return {
    restrict: 'E'
  , replace: true
  , scope: {}
  , transclude: true
  , templateUrl: 'views/directives/line.html'
  , link: function($scope, $element, attrs) {
      $scope.overrides = attrs.overrides;
    }
  };
});
