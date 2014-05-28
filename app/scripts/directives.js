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

directives.directive('rpHidden', function($window) {
  return {
    restrict: 'A'
  , scope: {}
  , link: function($scope, $element) {
      var window = angular.element($window);

      var handler = function() {
        var scrollTop = window.scrollTop()
          , elementY = $element.height();

        if (scrollTop > elementY) $element.addClass('rp-hidden');
        else $element.removeClass('rp-hidden');
      };

      window.on('scroll', handler);

      handler();
    }
  };
});
