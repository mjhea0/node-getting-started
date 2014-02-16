# Getting Started with Node

For the [Node-js-Denver-Boulder Meetup](http://www.meetup.com/Node-js-Denver-Boulder/) <3 

**You can grab the example code [here](https://github.com/mjhea0/node-getting-started).**

## Part 1

### Node Setup

1. Download [Node](http://nodejs.org/download/) for your specific platform. *This also installs [NPM](https://npmjs.org/)*. More on this later.
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

- `var http = require('http')` uses the HTTP server to process requests and send subsequent responses.
- `http.createServer` creates the web server object.
- `function (request, response) {}` handles requests and serves responses.
- `response.writeHead(200, {'Content-Type': 'text/plain'})` sends a response header in the form of a status code along with the exact header message.
- `response.end('Hello, World!\n')` tells the server that all response headers as well as the body have been sent.
- `.listen(1137, "127.0.0.1")` accepts connections on port 1137 on URL [http://127.0.0.1](http://127.0.0.1) (or [http://localhost](http://localhost)).

Please consult the Node API [documentation](http://nodejs.org/api/) for more info/further explanation.

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

## Part 2

**We'll be creating an entirely new app for this tutorial.**

As promised, let's add Express, which is a lightweight framework for Node. 

There's also an Express command line tool used to set up a project structure/boilerplate for use with, well, the Express framework. We can install them at the same time ...

Start by installing Express globally:

```sh
$ npm install -g express
```

### Project Setup

1. Use the Express command line tool to create our project structure:
  ```sh
  $ express <new_folder>
  ```

  This creates a new directory with a basic project structure.

2. Before we can begin developing, navigate into the folder then run the following command to load the Express dependencies from the *package.json* file:
  ```sh
  $ npm install
  ```

  > Please note: The dependencies within *package.json* are generally listed by name and version. In some cases, instead of a version, you'll see an `*`, which means that npm will retrieve the latest version of the dependency. For more information on NPM, please check out this [link](https://www.npmjs.org/doc/json.html). 

  Your project structure should now look like this:
  ```sh
  ├── app.js
  ├── package.json
  ├── public
  │   ├── images
  │   ├── javascripts
  │   └── stylesheets
  │       └── style.css
  ├── routes
  │   ├── index.js
  │   └── user.js
  └── views
      ├── index.jade
      └── layout.jade
  ```

  #### What's going on?
    - *app.js* includes your app configuration, middleware, and routing.
    - *package.json* holds you app's dependencies configs.
    - The "public" folder contains images, Javascript files, and stylesheets.
    - The file in your "routes" folder define the app's business logic.
    - "views" contain views, templates, and partials.

3. Test out your app to ensure everything is installed:
  ```sh
  $ node app
  ```

  Point your browser to [http://localhost:3000/](http://localhost:3000/), and you should see:

  ![express](https://raw.github.com/mjhea0/node-express-ajax-craigslist/master/img/welcome.png)

  Congrats! You just set up Express. Now, we just need to customize it. In this case we are going to build a form for submitting random strings that will be displayed beneath the form upon submission.

### Server Side

1.  Open *app.js*, then update the routes to match the following code:

  ```javascript
  // load dependencies
  var express = require('express'),
      routes = require('./routes'),
      http = require('http'),
      path = require('path');

  var app = express();

  // config - all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  // config - development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  // routes
  app.get('/', routes.index);

  // configure http server
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
  ```
#### What's going on?
  - First, we load our module dependencies. Essentially, when you structure a Node app, you use the global `require()` method to load and cache Javascript modules. The `app` variable is the actual Express server.
  - In the second section, `app.set()` is used to tell Express that we want to use Jade templates and where to find
 our "views" folder. Meanwhile `app.use()` functions are for middlewares, which you can read more about [here](http://expressjs.com/api.html#middleware).
  - Next, we have routes. The actual endpoint, or path, is defined here as well as the specific HTTP method. The actual callback is handled within the "routes" folder in the *index.js* file. 
  -  Finally, we configure the HTTP server like in Part 1.

2. Next, let's set up the first route. Open *index.js* from the "routes" folder. Update the code as follows:
  ```javascript
  exports.index = function(req, res){
    res.render('index', {title:'AJAX Testing'});
  };
  ```

  *Remember:* Routes have a path (string and/or regex), callback function, and a HTTP method. In the above code, we are simply adding the callback, which renders the `index` view and sets a title. 

3. Update your *index.jade* file:
  ```html
  doctype html
  html
    head
      title= title
      link(rel='stylesheet', href='http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css')
      link(rel='stylesheet', href='/stylesheets/style.css')
    body
    .container
      form(method='', action='', role="form")
        input#input.form-control(type='text', placeholder='enter something')
        br
        input#submit.btn.btn-default(type='submit')
      br
      #results
    script(src='http://code.jquery.com/jquery-1.10.2.min.js')
    script(src='http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js')
    script(src='/javascripts/main.js')
    ```

    Jade is a templating language, which compiles down to HTML. It makes it easy to separate logic from markup. If you're having trouble with the syntax, check out the online convertor [here](http://html2jade.aaron-powell.com/). Keep practicing!

### Client Side

1. Add a *main.js* file to the "javascripts" file and add the following code to the file:
  ```javascript
  $(function() {
    $("#submit").on("click",function() {
      event.preventDefault()
      var requestData = $("#input").val();
      console.log(requestData)
      $('#results').html(requestData);
    });
  });
  ```

  Here we grab the value from the `input` upon form submission and assign it to the variable `requestData`. Then we simply append the value back to the DOM.


2. We're just about done. Let's add one custom style to *style.css*:
  ```css
  .container {
    max-width: 500px;
  }
  ```

  Refresh the page. Test it out!

Boom!

## Part 3

Try this on your own. Create a basic number guessing game. 

Building on the code from the second part, update the code so that you enter a number instead of text. Create a new route that checks to see if the number is equal to the right number. If the user guesses right, return "Right!"; but, if the user guesses wrong, return "Wrong. Guess again." Finally, update your *main.js* to call the new endpoint of the route - passing the inputted number - then have it wait for a callback ("Right!" or "Wrong. Guess again."), which will be appended to the DOM.

Need help? Check out my answer in the "part3" folder.

Cheers!
