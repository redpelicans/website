'use strict';

module.exports = {
  options: {
    livereload: true // see connect task for livereload port
  }
, scripts: {
    files: 'app/scripts/**/*.js'
  , tasks: ['newer:jshint:dev']
  }
, styles: {
    files: 'app/styles/**/*.less'
  , tasks: ['less:all']
  }
, views: {
    files: 'app/views/**/*.html'
  }
, i18n: {
    files: 'app/i18n/*.json'
  }
, index: {
    files: 'index.html'
  }
};
