var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./",{'index': ['samples/live-streaming/live-delay-comparison-custom-manifest.html', 'index.htm']});
//var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(8000);
