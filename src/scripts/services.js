'use strict';

var services = angular.module(
  'rpApp.services'
, []
);

services.service("MenuSrvc", function() {
  var that = this;
  that.items = [
    { name: 'home', icon: 'home', url: '#!home' }
  , { name: 'technologies', icon: 'briefcase', url: '#!technologies' }
  , { name: 'blog', icon: 'book', url: '//blog.redpelicans.com' }
  // , { name: 'stories', icon: 'book', url: '#!stories' }
  // , { name: 'lab', icon: 'cog', url: '#!lab' }
  ];
  that.current;
  that.select = function(name) {
    that.current = _.find(that.items, function(item) {
      return item.name == name;
    });
  }
});