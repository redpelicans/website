'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dev:  ['src/index.html', 'src/compiled_styles']
    , dist: ['dist']
    }
  , copy: {
      index: {files: {'src/index.html': 'src/views/index.template.html'}}
    , dist: {files: [{expand: true, cwd: 'src', dest: 'dist', src: ['**/*', '!**/bower_modules/**']}]}
    }
  , less: {
      all: {files: [{expand: true, cwd: 'src/styles', dest: 'src/compiled_styles', src: '**/*.less', ext: '.css'}]}
    }
  , wiredep: {
      dev: {src: ['src/index.html'], ignorePath: 'src/'}
    , dist: {src: ['dist/index.html'], ignorePath: 'src/'}
    }
  , filerev: {
      files: {src: ['dist/**/*.{js,css}']}
    }
  , ngAnnotate: {
      files: {src: ['dist/scripts/*.js']}
    }
  , useminPrepare: {
      html: 'dist/index.html'
    }
  , usemin: {
      html: 'dist/index.html'
    , css: 'dist/compiled_styles/**/*.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('dev', ['clean:dev', 'copy:index', 'less:all', 'wiredep:dev']);
  grunt.registerTask('build', ['ngAnnotate', 'useminPrepare', 'concat:generated', 'cssmin:generated', 'uglify:generated', 'filerev', 'usemin'])
  grunt.registerTask('dist', ['clean:dist', 'copy:index', 'less:all', 'copy:dist', 'wiredep:dist', 'build']);
};
