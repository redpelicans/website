'use strict';

module.exports = {
  serve: [
    'clean:dev'
  , 'copy:dev'
  , 'bower-install:dev'
  , 'less:dist'
  , 'connect:dev'
  , 'watch'
  ]
, build: [
    'clean:dist'
  , 'copy:dist'
  , 'bower-install:dist'
  , 'less:dist'
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
