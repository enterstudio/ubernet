/**
 * Compiles Compass SCSS files into CSS
 */
module.exports = function(grunt) {
    grunt.config.set('compass', {
        dev: {
            options: {
                sassDir: 'assets/styles',
                imagesDir: 'assets/images',
                javascriptsDir: 'assets/js',
                fontsDir: 'assets/fonts',
                cssDir: '.tmp/public/styles',
                generatedImagesDir: '.tmp/public/images',
                outputStyle: 'expanded',
                trace: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
};
