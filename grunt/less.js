'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true
    , cwd: 'app/styles/'
    , src: '**/*.less'
    , dest: 'dist/styles'
    , ext: '.css'
    }]
  }
};
