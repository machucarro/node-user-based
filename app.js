// Node module dependencies ============================================================
require('newrelic');
var express = require('express');
//var mongoose = require('mongoose');
var passport = require('passport');
var cons = require('consolidate');
var swig = require('swig');
var flash = require('connect-flash');

// App dependencies ====================================================================
var config = require('./config');
var passportStrategy = require('./config/passport');
var routes = require('./routes');


// Initialise the server and connections ===============================================

// Connect the database
//mongoose.connect(config.db.url);

// Build the server with Express
var app = express();


// Configure Express ===================================================================
app.configure(function () {
    //Set up the Middleware to be used before routing
    app.use(express.logger(config.server.stage));  // log the requests on console
    app.use(express.cookieParser());        // read cookies
    app.use(express.bodyParser());          // read html forms
    app.use(express.methodOverride());      //For easily handling and redirecting PUT and DELETE requests [Optional]

    app.engine('twig', cons.swig);          // Assign the swig engine to render html files
    app.set('view engine', 'twig');         // Set the html format as default view file format for render calls
    app.set('views', __dirname + '/view/templates'); // Set the folder where the app should search for the views
    app.set('view options', {
        layout: false
    });

    app.use(express.static(__dirname + '/view/static'));
    app.use(express.session({ secret: 'S5p2rs2cr2t!' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());                       // use connect-flash for flash messages stored in session
    this.use(app.router);
});

// Extra config for the view engine =====================================================
swig.init({
    root: __dirname + '/view/templates',
    allowErrors: true // allows errors to be thrown and caught by express instead of suppressed by Swig
});


// Initialise router ====================================================================
routes(app, passport);

// Start server =========================================================================
app.listen(config.server.port);
console.log('The magic happens on port ' + config.server.port);