'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc'
  , reporter: require('jshint-stylish')
  }
, dev: [
    'Gruntfile.js'
  , 'app/scripts/**/*.js'
  ]
};
