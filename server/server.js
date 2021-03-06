/// <reference path="../typings/node/node.d.ts"/>
/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 8001;
var four0four = require('./utils/404')();
var httpProxy = require('http-proxy');
var serveIndex = require('serve-index');

var proxy = httpProxy.createProxyServer({
    target: 'http://localhost:8080',
    ws: true,
    changeOrigin: true
});

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

// app.use('/api', require('./routes'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment){
    case 'prod':
        port = 8002
        console.log('** BUILD **');
        app.use(express.static('./dist/'));
        app.use(apiProxy);
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function(req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        // app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./app/'));
        app.use(express.static('./.tmp/'));
        app.use(express.static('./'));
        app.use('/reports', serveIndex('./reports/'));

        app.use(apiProxy);
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function(req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        // app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, '127.0.0.1', 511, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});

function apiProxy(req, res, next) {
    if (req.url.indexOf('/api') === 0) {
        proxy.web(req, res);
    } else {
        next();
    }
}
