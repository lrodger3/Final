var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    passport = require('passport'),
    sessions = require('express-session'),
    port = process.env.PORT || 8080,
    Router = require('./routes');

    require('./config/passport'); // include our own passport config
    mongoose.connect('mongodb://localhost/data/db')
    var sessionMiddleware = sessions({
        secret : "oeQ6ZEGFVBG0J4YI9G9WSj^Dz",
        resave : false, // resave the cookie even if it doesn't change
        saveUninitialized : true // save an empty session / cookie for EVERY user that comes to the site
    });

// Create Express App Object \\
    var app = express();


// Mount Middleware
app.use(express.static(__dirname + '/public'),
       bodyParser.json(),
       bodyParser.urlencoded({extended : true}),
       morgan('dev'),
       sessionMiddleware,
       passport.initialize(), // This gives it access to our app
       passport.session() // gives passport access to our sessions
       );

// Routes!
Router(app); // Pass the express app object as an argument

// Listen for connections
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`It's up on ${process.env.PORT || 3000}`);
});
