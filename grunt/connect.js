'use strict';

module.exports = {
  options: {
    port: process.env.PORT || 9000
  , hostname: process.env.HOST || 'localhost'
  }
, dev: {
    options: {
      livereload: 35729 // livereload port
    , debug: true
    , base: 'app'
    }
  }
, dist: {
    options: {
      livereload: false
    , base: 'dist'
    }
  }
};
