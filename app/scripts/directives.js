'use strict';

var directives = angular.module('rpApp.directives', []);

directives.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    }
  , link: function($scope, element, $attrs) {
      var window = angular.element($window)
        , handler = function() { $scope.scroll = window.scrollTop(); };
      
      window.on('scroll', $scope.$apply.bind($scope, handler));
      handler();
    }
  };
});
