'use strict';

var controllers = angular.module('rpApp.controllers', []);

controllers.controller('SlideMenuCtrl', function($scope) {
  $scope.isActive = false;
  $scope.toggle = function() {
    $scope.isActive = !$scope.isActive;
  }
});
