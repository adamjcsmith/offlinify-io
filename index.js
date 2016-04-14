var http = require('http');
var express = require('express');
var app = express();
var compression = require('compression');
var cors = require('cors');

var _ = require('lodash');
var jade = require('jade');

var jsonData = require('./data/offlinify-data.json');
var jsonDataBig = require('./data/offlinify-data-big.json');

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

// api
app.get('/api/get', function(req, res) {
	var filteredData = jsonData;
	if(req.query.after) {
      filteredData = _.filter(filteredData, function(o) {
        return Date.parse(o.timestamp) > Date.parse(req.query.after);
      });
    }
	res.json(filteredData);
});

app.get('/api/getBig', function(req, res) {
	var filteredData = jsonDataBig;
	if(req.query.after) {
      filteredData = _.filter(filteredData, function(o) {
        return Date.parse(o.timestamp) > Date.parse(req.query.after);
      });
    }
	res.json(filteredData);
});

app.post('/post', function(req, res) {
	console.log("Post request received.");
});

// console
app.listen(80, function() {
	console.log("Offlinify.io Running");
});
