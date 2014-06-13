'use strict';

var controllers = angular.module(
  'rpApp.controllers'
, []
);

controllers.controller('AppCtrl', function($scope, $routeParams, $document, $location, $anchorScroll) {
  $scope.$on('$viewContentLoaded', function() {
    // console.log(document.getElementById('#'+$routeParams.id))
    // var element = angular.element.find('#'+$routeParams.id);
    // console.log(angular.element.find('#'+$routeParams.id))
    // if ($routeParams.id) $document.scrollTo(element[0].height());

    // var someElement = angular.element(document.getElementById($routeParams.id));
    // console.log(someElement)
    // $document.scrollToElement(someElement, 0, 2000);

    $location.hash($routeParams.id);
    $anchorScroll();
  });
});

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

controllers.controller("ServicesCtrl", function($scope, MenuSrvc, $routeParams, $document) {
  MenuSrvc.select("services");
});

controllers.controller("StoriesCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("stories");
});

controllers.controller("LabCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("lab");
});
