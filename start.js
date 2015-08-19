var express = require('express');
var app = express();

var Jay = require('./node_modules/node-jay/jay.js'),
    jay = new Jay();

app.get ('/nxt', function (req, res) {
	jay.request(req.query.requestType, {aliasName: req.query.aliasName}, function(data) {
	res.send(data);
});
});

var server = app.listen(3053, function() {
	//console.log('NXT-Alias Service started on port 3053');
});
