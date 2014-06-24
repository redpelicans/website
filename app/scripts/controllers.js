'use strict';

var controllers = angular.module(
  'rpApp.controllers'
, []
);

controllers.controller('AppCtrl', function($scope, $routeParams, $document, $location, $anchorScroll, $timeout) {
  $scope.$on('$viewContentLoaded', function() {
    $document.scrollTop(0, 0);
    if ($routeParams.id) {
      $timeout(function() {
        $document.scrollToElement(angular.element(document.getElementById($routeParams.id)), 120, 2000);
      }, 1000);
    }
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

controllers.controller("TechnologiesCtrl", function($scope, MenuSrvc, moment) {
  MenuSrvc.select("technologies");

  $scope.adoption = {};
  $scope.adoption.data = [
    {'key': 'Javascript', values: [[2014, 487971],[2013,327467],[2012,156521],[2011,60754],[2010,23095],[2009,8119],[2008,2060]]}
  , {'key': 'Java', values: [[2014, 394101],[2013,230600],[2012,111277],[2011,46227],[2010,14342],[2009,4157],[2008,596]]}
  ];
  $scope.adoption.xAxisTickFormat = function() { return function(d, i) { return d; }; };
  $scope.adoption.yAxisTickFormat = function() { return function(d, i) { return parseInt(d/1000)+'k'; }; };
});

controllers.controller("LogoCtrl", function($scope) {
  $scope.logo = {
    icon: 'send'
  , size: 256
  , color: 'cd4436'
  , background: 'ffffff'
  };
});

controllers.controller("StoriesCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("stories");
});

controllers.controller("LabCtrl", function($scope, MenuSrvc) {
  MenuSrvc.select("lab");
});
