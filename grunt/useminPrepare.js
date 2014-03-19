'use strict';

module.exports = {
  html: 'dist/index.html'
, options: {
    root: './'
  , dest: 'dist'
  , flow: {
      steps: {
        js: ['concat']
      , css: ['concat', 'cssmin']
      }
      , post: [] // if not present, task does not work
    }
  }
};
