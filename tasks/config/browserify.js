/**
 * Browserify files
 */
module.exports = function(grunt) {
    grunt.config.set('browserify', {
        dev: {
            files: {
                '.tmp/public/scripts.js': ['assets/js/index.js']
            },
            options: {
                transform: ['debowerify', 'deamdify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};
