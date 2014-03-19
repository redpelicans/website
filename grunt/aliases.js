'use strict';

module.exports = {
  serve: [
    'clean:tmp'
  , 'clean:dist'
  , 'copy:dev'
  , 'bower-install:dist'
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
  , 'replace:ghpages'
  , 'clean:tmp'
  ]
, 'serve-dist': [
    'build'
  , 'connect:dist:keepalive'
  ]
};
