// Karma configuration
// Generated on Tue Apr 28 2015 14:55:54 GMT-0400 (EDT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jspm',
            'sinon',
            'mocha',
            'chai-as-promised',
            'chai',
            'phantomjs-shim'
        ],


        // list of files / patterns to load in the browser
        files: [

        ],

        jspm: {
            loadFiles: [
                'app/jspm_packages/npm/babel-core@5.1.13/browser-polyfill.js',
                'test/**/*-spec.js'
            ],
            serveFiles: ['app/js/**/*.js'],
            config: 'app/config.js',
            packages: 'app/jspm_packages'
        },

        proxies: {
            '/base/jspm_packages/': '/base/app/jspm_packages',
            '/base/app/ts': '/base/app/js'
            //'/base/node_modules/karma-babel-preprocessor/node_modules/babel-core/': '/base/node_modules/babel/node_modules/babel-core/'
        },


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/js/**/*.js': ['babel'],
            'test/**/*.js': ['babel']
        },

        babelPreprocessor: {
            options: {
                optional: ['runtime'],
                sourceMap: 'inline',
                modules: 'system'
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        coverageReporter: {
            dir: 'reports/coverage',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcov', subdir: 'lcov' },
                { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
            ]
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
            //'PhantomJS'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    });
};
