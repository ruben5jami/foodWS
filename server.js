// Load the module dependencies
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();

// Use the Express application instance to listen to the port
app.listen(process.env.PORT || 8000);

console.log('server is listening');
