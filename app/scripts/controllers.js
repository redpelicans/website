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
  $scope.states = [
    'home'
  , 'angular'
  , 'd3'
  , 'node'
  , 'mongo'
  , 'consulting'
  ];
  $scope.state = $scope.states[0];
  $scope.changeState = function(index) {
    if (_.isNumber(index) && index < $scope.states.length) {
      $scope.state = $scope.states[index];
    } else {
      $scope.state = $scope.states[0];
    }
  }

  $scope.carousel = {};
  $scope.carousel.interval = -1;
  $scope.carousel.slides = $scope.states;
  // $scope.carousel.slides = _.map($scope.states, function(state) {
  //   return { template: state.template };
  // });

  // $scope.carousel.changeSlide = function(index) {
  //   if (_.isNumber(index) && index < $scope.carousel.slides.length) {
  //     $scope.carousel.slides[index].active = true;
  //   }
  // }

  // $scope.$watch(
  //   'state'
  // , function(newState) {
  //     if (newState && _.has(newState, 'index')) {
  //       $scope.carousel.changeSlide(newState.index);
  //     }
  //   }
  // , true);

  $scope.changeState(_.indexOf($scope.states, $routeParams.stateId));
});
