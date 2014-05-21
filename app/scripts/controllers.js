'use strict';

var controllers = angular.module(
  'rpApp.controllers'
, [ 'ngTouch'
  , 'ui.bootstrap'
]);

controllers.controller('HeaderCtrl', function($scope) {
  $scope.scroll = 0;
});

controllers.controller('SlideMenuCtrl', function($scope) {
  $scope.isActive = false;
  $scope.toggle = function() {
    $scope.isActive = !$scope.isActive;
  }
});

controllers.controller('ServicesCtrl', function($scope, $routeParams) {
  $scope.states = {
    home: {template: 'home', index: 0}
  , node: {template: 'node', index: 1}
  };
  $scope.state = $scope.states[0];
  $scope.changeState = function(newStateId) {
    if (_.contains(_.keys($scope.states), newStateId)) {
      $scope.state = $scope.states[newStateId];
    }
  }

  $scope.carousel = {};
  $scope.carousel.interval = -1;
  $scope.carousel.slides = _.map($scope.states, function(state) {
    return { template: state.template };
  });

  $scope.carousel.changeSlide = function(index) {
    if (_.isNumber(index) && index < $scope.carousel.slides.length) {
      $scope.carousel.slides[index].active = true;
    }
  }

  $scope.$watch(
    'state'
  , function(newState) {
      if (newState && _.has(newState, 'index')) {
        $scope.carousel.changeSlide(newState.index);
      }
    }
  , true);

  $scope.changeState($routeParams.stateId);
});
