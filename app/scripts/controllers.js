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
  , angular: {template: 'angular', index: 1}
  , d3: {template: 'd3', index: 2}
  , node: {template: 'node', index: 3}
  , mongo: {template: 'mongo', index: 4}
  , consulting: {template: 'consulting', index: 5}
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
