var http = require('http');
var express = require('express');
var app = express();
var React = require('react');
var jsx = require('node-jsx');

var _ = require('lodash');
var jade = require('jade');

jsx.install();

// view setup
app.set('views', './views');
app.set('view engine', 'jade');

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
