// dependencies
var fs = require('fs');
var express = require('express');
var routes = require('./routes');
var path = require('path');
var cons = require('consolidate');
var swig = require('swig');
var config = require('./config/oauth.js');
var User = require('./user.js');
var mongoose = require('mongoose');
var passport = require('passport');
var auth = require('./authentication.js');

// connect to the database
mongoose.connect('mongodb://localhost:27017/userApp');

var app = express();

app.configure(function () {
    app.engine('twig', cons.swig);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'twig');
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


// serialize and deserialize
passport.serializeUser(function(user, done) {
    console.log('serializeUser: ' + user._id)
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        console.log(user);
        if(!err) done(null, user);
        else done(err, null);
    })
});

routes(app,passport);

// port
app.listen(3000);

// test authentication
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
}

module.exports = app
