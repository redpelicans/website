'use strict';

module.exports = {
  options: {
    browsers: ['last 2 version']
  }
, dist: {
    files: [{
      expand: true
    , src: ''
    , dest: '.tmp/styles/'
    }]
  }
};
