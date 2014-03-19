'use strict';

module.exports = {
  dev: {
    files: {
      'app/index.html': 'index.html'
    }
  }
, dist: {
    files: [
      { 'dist/index.html': 'index.html' }
    , { expand: true
      , dot: true
      , cwd: 'app'
      , dest: 'dist'
      , src: [
          '*.{ico,png,txt}'
        , '{styles,.styles}/**/*.css'
        , 'scripts/**/*.js'
        , 'views/{,*/}*.html'
        , 'images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        , 'i18n/**/*.json'
        , 'fonts/**/*'
        , 'bower_modules/**/*'
        ]
      }
    ]
  }
};
