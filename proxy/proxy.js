const express = require('express'),
    httpProxy = require('http-proxy'),
    proxy = new httpProxy.createProxyServer();

const appRoute = {
    target: 'http://localhost:5000'
};

var allowCrossDomain = function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID');
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
	res.sendStatus(200);
    } else {
        proxy.web(req, res, { target: 'http://localhost:3000'});
    }
};

var app = express();
app.use(allowCrossDomain);
app.listen(3001);
console.log("Proxy started on http://localhost:3001");
