module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            my_target: {
                files: {
                    'dist/js/output.min.js': ['js/**/*.js']
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'css/*.css'
                }
            }
        },
        watch: {
            stylesheets: {
                files: ['assets/css/**/*.css'],
                //tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },

            scripts: {
                files: 'app/**/*.js',
                //tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 4000,
                    base: '.',
                    hostname: 'localhost',
                    debug: true,
                    livereload: true,
                    open: true
                }
            }
        },
        concurrent: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        injector: {
            options: {},
            dev: {
                files: {
                    'index.html': [ 'app/**/*.js', 'app/**/*.css', 'assets/css/*.css', 'outdated/**/*.js','bower.json']
                }
            },
            production: {
                files: {
                    'index.html': [
                        'app/assets/css/**/*.css',
                        'app/assets/js/*.js'
                    ]

                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'connect', 'watch']);

    grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
