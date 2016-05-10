var express = require('express')
var app = express()

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://carteazy:xb0xlive@ds051923.mlab.com:51923/cmpe172game';
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	db.close();
});


app.use(express.static(__dirname + '/htmlcss'))

app.get('/', function(requres, response) {
response.sendfile(__dirname + '/index.html')
})

var port = process.env.PORT || 8080

app.listen(port, function() {
	console.log("DIR: " + __dirname)
	console.log("Node app is running at:" + port)
})
