'use strict';

module.exports = {
  build: [
    'clean:dist'
  , 'less:all'
  , 'copy:dist'
  , 'bower-install:dist'
  , 'useminPrepare'
  , 'concat:generated'
  , 'cssmin:generated'
  , 'rev'
  , 'usemin'
  , 'clean:tmp'
  ]
, serve: [
    'clean:dev'
  , 'copy:dev'
  , 'bower-install:dev'
  , 'less:all'
  , 'connect:dev'
  , 'watch'
  ]
, 'serve-dist': [
    'build'
  , 'connect:dist:keepalive'
  ]
, deploy: [
    'build'
  , 'gh-pages:dist'
  ]
};
