'use strict';

module.exports = {
  serve: [
    'clean:dev'
  , 'copy:dev'
  , 'bower-install:dev'
  , 'less:all'
  , 'connect:dev'
  , 'watch'
  ]
, build: [
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
, 'serve-dist': [
    'build'
  , 'connect:dist:keepalive'
  ]
};
