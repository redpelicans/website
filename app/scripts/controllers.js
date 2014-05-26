'use strict';

var controllers = angular.module(
  'rpApp.controllers'
, []
);

controllers.controller('MenuCtrl', function($scope, MenuSrvc, $aside) {
  $scope.item = {};
  $scope.$watch(
    function() { return MenuSrvc.item.current; }
  , function(newItem) { $scope.item = newItem;}
  );
  $scope.active = MenuSrvc.state.isOpen;
  $scope.toggle = function() {
    $scope.active = MenuSrvc.state.isOpen = !MenuSrvc.state.isOpen;
  }

  $scope.items = MenuSrvc.items;
  $scope.change = function(item) {
    MenuSrvc.item.change(item);
  }
  var aside = $aside({
    scope: $scope
  , placement: "left"
  , animation: "am-slide-left"
  , container: "body"
  , contentTemplate: "views/menu/content.html"
  , show: false
  });
  aside.$promise.then(function() {
    aside.show();
    aside.hide();
  });
  $scope.$watch(
    function() { return MenuSrvc.state.isOpen; }
  , function(isOpen) {
      $scope.active = isOpen;
      aside.$promise.then(function() {
        isOpen ? aside.show() : aside.hide();
      });
    }
  );
});
