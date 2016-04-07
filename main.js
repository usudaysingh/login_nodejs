//var http = require("http");
//http.createServer(function (request, response) {
   // Send the HTTP header
   //  // HTTP Status: 200 : OK
   //   // Content Type: text/plain
   //    response.writeHead(200, {'Content-Type': 'text/plain'});
   //
   //     // Send the response body as "Hello World"
   //      response.end('Hello World\n');
   //      }).listen(8081);
   //      // Console will print the message
   //      console.log('Server running at http://127.0.0.1:8081/');


var http = require('http');
var fs = require('fs');
var url = require('url');
//var express = require('express');
// Create a server
http.createServer( function (request, response) {
 // Parse the request containing file name
 var pathname = url.parse(request.url).pathname;

 // Print the name of the file for which request is made.
 console.log("Request for " + pathname + " received.");

 // Read the requested file content from file system
 fs.readFile(pathname.substr(1), function (err, data) {
 if (err) {
 console.log(err);
 // HTTP Status: 404 : NOT FOUND
 // Content Type: text/plain
 response.writeHead(404, {'Content-Type': 'text/html'});
 }else{
 //Page found
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/html'});
// Write the content of the file to response body
 response.write(data.toString());
 }
 // Send the response body
 response.end();
 });
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
