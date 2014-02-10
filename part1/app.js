// load http module
var http = require('http');

// configure http server
http.createServer(function (request, response) {
	request.on('data', function(data) {
		console.log(data);
	});
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(JSON.stringify({success : true}))
}).listen(1137, "127.0.0.1");

// inform user what is happening
console.log('Server running at http://127.0.0.1:1137/');
 
