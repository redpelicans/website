'use strict';

var controllers = angular.module(
  'rpApp.controllers'
, []
);

controllers.controller('MenuCtrl', function($scope, MenuSrvc) {
  $scope.menu = {};

  $scope.menu.items = MenuSrvc.items;
  $scope.menu.current = {};
  $scope.menu.isActive = false;
  $scope.menu.change = function(item) {
    MenuSrvc.current = item;
    $scope.menu.toggle();
  }
  $scope.menu.toggle = function() {
    $scope.menu.isActive = !$scope.menu.isActive;
  }

  $scope.$watch(function() { return MenuSrvc.current; }, function(current) {
    $scope.menu.current = current;
  });
});

controllers.controller("HomeCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("home");
});

controllers.controller("ServicesCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("services");
});

controllers.controller("StoriesCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("stories");
});

controllers.controller("LabCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("lab");
});
