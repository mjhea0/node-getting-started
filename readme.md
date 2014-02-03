# Getting Started with Node

For the [Node-js-Denver-Boulder Meetup](http://www.meetup.com/Node-js-Denver-Boulder/) <3 

### Setup

1. Download [Node](http://nodejs.org/download/) for your specific platform.
2. Create a new folder. Within that folder create a file called *app.js*. and add the following code to the file:
  ```javascript
	var http = require('http');

	http.createServer(function (request, response) {
	  response.writeHead(200, {'Content-Type': 'text/plain'});
	  response.end('Hello, World!\n');
	}).listen(1137, "127.0.0.1");

	console.log('Server running at http://127.0.0.1:1137/');
	```

	Save the file.

3. Navigate to the folder in your terminal and fire up the server:
  ```sh
  $ node app.js
  ```

4. Point your browser to [http://localhost:1137/](http://localhost:1137/).

#### What's going on?

1. `var http = require('http')` uses the HTTP server to ultimately process requests and send responses
2. `http.createServer` creates the web server object.
3. `function (request, response) {}` handles requests and serves responses.
4. `response.writeHead(200, {'Content-Type': 'text/plain'})` sends a reponse header in the form of a status code along with the exact header message.
5. `response.end('Hello, World!\n')` tells the server that all response headers as well as the body have been sent and that the entire response has been sent.
6. `.listen(1137, "127.0.0.1")` accepts connections on port 1137 on URL http://127.0.0.1 (or http://localhost).

For more info, please consult the Node API [documentation](http://nodejs.org/api/) for more info/further explanation.
