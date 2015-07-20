'use strict';

var services = angular.module(
  'rpApp.services'
, []
);

services.service("MenuSrvc", function() {
  var that = this;
  that.items = [
    { name: 'home', icon: 'home', url: '#!home' }
  , { name: 'technologies', icon: 'cog', url: '#!technologies' }
  , { name: 'portfolio', icon: 'briefcase', url: '#!portfolio' }
  , { name: 'blog', icon: 'book', url: '//blog.redpelicans.com' }
  ];
  that.current;
  that.select = function(name) {
    that.current = _.find(that.items, function(item) {
      return item.name == name;
    });
  }
});
