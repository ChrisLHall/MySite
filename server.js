// based on the tutorial at https://codeforgeek.com/reverse-proxy-using-expressjs/

var express = require('express');
var mainServer = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();


// TODO create servers for each of my games, but load the config from a text file so it's easy to set new ones up
//var serverOne = 'http://localhost:3001',
//    ServerTwo = 'http://localhost:3002',
//    ServerThree = 'http://localhost:3002';
 


/*
mainServer.all("/app1/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

mainServer.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

mainServer.all("/app3/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});
*/

// TODO this static server works for now, but expand it with templates
mainServer.use(express.static('site'));
mainServer.listen(80);
