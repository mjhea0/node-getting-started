# Getting Started with Node

For the [Node-js-Denver-Boulder](http://www.meetup.com/Node-js-Denver-Boulder/) <3 

### Setup

1. Download [Node](http://nodejs.org/download/) for your platform
2. Create a new folder. Within that folder create a file called *app.js*. and add the following code to the file:
  ```javascript
  var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.send('Hello World\n');
	}).listen(1137, "127.0.0.1");
	console.log('Server running at http://127.0.0.1:1137/');
	```

	Save.

3. Navigate to the folder in your terminal and fire up the server:
  ```sh
  $ node app.js
  ```


