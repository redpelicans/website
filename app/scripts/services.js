'use strict';

var services = angular.module(
  'rpApp.services'
, []
);

services.service('MenuSrvc', function() {
  var that = this;

  that.items = [
    { name: 'HOME', icon: 'home', url: '/' }
  , { name: 'SERVICES', icon: 'briefcase', url: '/#/services/home' }
  , { name: 'STORIES', icon: 'book', url: '/#/stories' }
  , { name: 'LAB', icon: 'cog', url: '/#/lab' }
  ];
  that.item = {};
  that.item.current = that.items[0];
  that.item.change = function(item) {
    that.item.current = item;
    that.state.isOpen = false;
  }

  that.state = {};
  that.state.isOpen = false;
});
