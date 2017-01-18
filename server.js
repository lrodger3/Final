var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 8080,
    Router = require('./routes'),
// Create Express App Object \\
    app = express();

// Mount Middleware
app.use(express.static(__dirname + '/public'),
       bodyParser.json(), 
       bodyParser.urlencoded({extended : true}),
       morgan('dev') 
       );

// Routes!
Router(app); // Pass the express app object as an argument

// Listen for connections
app.listen(PORT,()=>{
  console.log("Server Up! on port " + PORT);
});
