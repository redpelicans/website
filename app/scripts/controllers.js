'use strict';

var controllers = angular.module(
  'rpApp.controllers'
, []
);

controllers.controller('MenuCtrl', function($scope) {
  $scope.menu = {};

  $scope.menu.items = [
    { name: 'HOME', icon: 'home', url: '/' }
  , { name: 'SERVICES', icon: 'briefcase', url: '/#/services/home' }
  , { name: 'STORIES', icon: 'book', url: '/#/stories' }
  , { name: 'LAB', icon: 'cog', url: '/#/lab' }
  ];
  $scope.menu.current = $scope.menu.items[0];
  $scope.menu.isActive = false;
  $scope.menu.change = function(item) {
    $scope.menu.current = item;
    $scope.menu.toggle();
  }
  $scope.menu.toggle = function() {
    $scope.menu.isActive = !$scope.menu.isActive;
  }
});
