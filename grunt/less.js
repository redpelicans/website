'use strict';

module.exports = {
  all: {
    files: [{
      expand: true
    , cwd: 'app/styles/'
    , src: '**/*.less'
    , dest: 'app/.styles'
    , ext: '.css'
    }]
  }
};
