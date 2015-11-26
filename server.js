var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('petUI', {'index': ['app.html', 'app.htm']})

// Create server
var server = http.createServer(function(req, res){
    var done = finalhandler(req, res)
    serve(req, res, done)
})

// Listen
server.listen(3000)


/*var serveStatic = require('serve-static')


var path    = require("path");
var express = require("express");

var app     = express();


app.use(express.static('petUI'));
app.get('',function(req,res){
    res.sendFile(path.join(__dirname+'/app.html'));
});
//app.use("/bundle.js ", express.static(__dirname + '/bundle.js'));
//app.use(express.static(__dirname+'bundle.js'));


app.listen(3900);
console.log("Running at Port 3900");





 /*
var util = require('util'),
    connect = require('connect'),
    port = 1378;

connect.use(connect.static(__dirname)).listen(port);
console.log('Listening on ' + port + '...');
console.log('Press Ctrl + C to stop.');



var http = require('http');
var connect = require('connect');

// Create a connect dispatcher
var app = connect()
    // register a middleware
    .use(function (req, res, next) { next(); });

// Register with http
http.createServer(app)
    .listen(3000);*/