// load http module and use fs to access the file system
var http = require('http'),
    fs = require('fs');

// configure http server
http.createServer(function (request, response) {
  
  // what's going on here?
  fs.readFile('data.txt', function readData(err, data) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(data);
  })
  
}).listen(1137, "127.0.0.1");

// inform user what is happening
console.log('Server running at http://127.0.0.1:1137/');

