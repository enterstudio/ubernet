module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'compass:dev',
		'copy:dev',
        'browserify:dev',
        'coffee:dev'
	]);
};
