module.exports = function(grunt) {
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: ['bower_components/d3.chart.arclabels',
                            'bower_components/d3.chart.axis',
                            'bower_components/d3.chart.brush',
                            'bower_components/d3.chart.eventbind',
                            'bower_components/d3.chart.grid',
                            'bower_components/d3.chart.plot',
                            'bower_components/d3.chart.text'],
                    outdir: 'doc'
                }
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.registerTask('default', [ 'yuidoc' ]);
}
