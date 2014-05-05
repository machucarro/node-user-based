// dependencies
var express = require('express');
var routes = require('./routes');
var cons = require('consolidate');
var swig = require('swig');
var User = require('./app/models/User.js');
var mongoose = require('mongoose');
var passport = require('passport');

// connect to the database
mongoose.connect('mongodb://localhost:27017/userApp');

var app = express();

app.configure(function () {
    app.engine('html', cons.swig);
    app.set('views', __dirname + '/views');
    app.set('view options', { layout: false });
    app.use(express.logger());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'S5p2rs2cr2t!' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

//////////////////////
// Swig Settings
//////////////////////
swig.init({
    root: __dirname + '/views',
    allowErrors: true // allows errors to be thrown and caught by express instead of suppressed by Swig
});

routes(app,passport);

// port
app.listen(3000);

module.exports = app;
