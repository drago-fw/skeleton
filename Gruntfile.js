module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.css'],
                dest: 'assets/combine/css/style.css'
            },
            js: {
                src: ['vendor/nette/forms/src/assets/netteForms.js'],
                dest: 'assets/combine/js/app.js'
            }
        },
        uglify: {
            js: {
                src: 'assets/combine/js/app.js',
                dest: 'www/js/app.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'assets/combine/css/style.css',
                dest: 'www/css/style.min.css'
            }
        },
        processhtml: {
            dist: {
                files: {
                    'app/module/web/presenter/templates/@layout.latte': [
                        'app/module/web/presenter/templates/@dev.latte'
                    ]
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.registerTask('grunt-go', [
        'concat', 'uglify', 'cssmin', 'processhtml'
    ]);
};