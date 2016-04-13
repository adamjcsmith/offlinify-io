var http = require('http');
var express = require('express');
var app = express();
var compression = require('compression');

var _ = require('lodash');
var jade = require('jade');

// view setup
app.set('views', './views');
app.set('view engine', 'jade');

// compression:
app.use(compression({level: 9}));

// static files
app.use('/static', express.static('static'));

// routes
app.get('/', function(req, res) {
	res.render('index', {title: 'This is a title', message: 'This is text'});
});

// console
app.listen(80, function() {
	console.log("Offlinify.io Running");
});
