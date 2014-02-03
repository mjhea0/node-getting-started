# Getting Started with Node

For the [Node-js-Denver-Boulder Meetup](http://www.meetup.com/Node-js-Denver-Boulder/) <3 

### Node Setup

1. Download [Node](http://nodejs.org/download/) for your specific platform. *This also installs NPM*. More on this later.
2. Create a new folder. Within that folder create a file called *app.js*. and add the following code to the file:
  ```javascript
  // load http module
  var http = require('http');

  // configure http server
  http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, World!\n');
  }).listen(1137, "127.0.0.1");

  // inform user what is happening
  console.log('Server running at http://127.0.0.1:1137/');
  ```

  Save the file.

3. Navigate to the folder in your terminal and fire up the server:
  ```sh
  $ node app.js
  ```

4. Point your browser to [http://localhost:1137/](http://localhost:1137/).

#### What's going on?

1. `var http = require('http')` uses the HTTP server to process requests and send subsequent responses.
2. `http.createServer` creates the web server object.
3. `function (request, response) {}` handles requests and serves responses.
4. `response.writeHead(200, {'Content-Type': 'text/plain'})` sends a response header in the form of a status code along with the exact header message.
5. `response.end('Hello, World!\n')` tells the server that all response headers as well as the body have been sent.
6. `.listen(1137, "127.0.0.1")` accepts connections on port 1137 on URL [http://127.0.0.1](http://127.0.0.1) (or [http://localhost](http://localhost)).

For more info, please consult the Node API [documentation](http://nodejs.org/api/) for more info/further explanation.

### Extended Example

1. Open *app.js* and save it as *app2.js*, then add the following code:
  ```javascript
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
  ```

3. Save and run.

3. Go over this line by line. See if you can figure out what's going on? Need help? Consult the Node [documentation](http://nodejs.org/api/) and/or use the "Google-it-first" algorithm. 

**Next time we'll add [Express](http://expressjs.com/) into the mix!**
