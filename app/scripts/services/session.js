'use strict';

angular.module('landingApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
