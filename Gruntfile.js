module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-obfuscator');

  grunt.initConfig({
    obfuscate: {
      files: ["src/*/*.js"]
    }
  })
};
