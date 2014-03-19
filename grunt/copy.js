'use strict';

module.exports = {
  dev: {
    files: {
      'index.html': 'app/index.html'
    }
  }
, dist: {
    files: [
      { 'index.html': 'app/index.html' }
    , { expand: true
      , dot: true
      , cwd: 'app'
      , dest: 'dist'
      , src: [
          '*.{ico,png,txt}'
        , 'views/{,*/}*.html'
        , 'images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        , 'i18n/**/*.json'
        , 'fonts/**/*'
        ]
      }
    , { expand: true
      , dest: 'dist'
      , src: 'bower_components/**/*'
      }
    ]
  }
};
