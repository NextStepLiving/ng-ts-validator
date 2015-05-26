exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'test/e2e/**/*-spec.js'
    ],
    capabilities: {
        browserName: 'firefox'
    },
    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec'
    }


};
