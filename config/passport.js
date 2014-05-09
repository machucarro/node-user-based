var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GithubStrategy = require('passport-github').Strategy;
var GoogleStrategy = require('passport-google-oauth').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('./index');
var User = require('./../app/user_domain/User');
var localAuthHandler = require('./../app/authentication/LocalAuthHandler');
var facebookOauthTokenHandler = require('./../app/authentication/FacebookOauthTokenHandler');
var githubOauthTokenHandler = require('./../app/authentication/GithubOauthTokenHandler');
var googleOauthTokenHandler = require('./../app/authentication/GoogleOauthTokenHandler');
var twitterOauthTokenHandler = require('./../app/authentication/TwitterOauthTokenHandler');

module.exports.init = function (passport) {

    // passport session setup ===========================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user){
            done(err, user);
        })
    });

    // passport check if its logged in ==================================================
    // This is an auxiliary function we used to determine if a user is logged in
    passport.isLoggedIn = function(req, res, next){
        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }


    // Signup strategy: Local ===========================================================
    var localSignupStrategy = new LocalStrategy(config.auth.local, LocalAuthHandler.handleSignup);
    passport.use('local-signup', localSignupStrategy);

    // Login strategy: local =============================================================
    var localLoginStrategy = new LocalStrategy(config.auth.local, LocalAuthHandler.handleLogin);
    passport.use('local-login', localLoginStrategy);

    // Oauth strategy: Facebook =========================================================
    if(!config.auth.facebook.clientID.length == 0){
        var facebookStrategy = new FacebookStrategy(config.auth.facebook, facebookOauthTokenHandler.handle);
        passport.use(facebookStrategy);
    }

    // Oauth strategy: GitHub ===========================================================
    if(!config.auth.github.clientID.length == 0){
        var githubStrategy = new GithubStrategy(config.auth.github, githubOauthTokenHandler.handle);
        passport.use(githubStrategy);
    }

    // Oauth strategy: Google ===========================================================
    if(!config.auth.google.clientID.length == 0){
        var googleStrategy = new GoogleStrategy(config.auth.google, googleOauthTokenHandler.handle);
        passport.use(googleStrategy);
    }

    // Oauth strategy: Twitter ==========================================================
    if(!config.auth.twitter.clientID.length == 0){
        var twitterStrategy = new TwitterStrategy(config.auth.twitter, twitterOauthTokenHandler.handle);
        passport.use(twitterStrategy);
    }

    return passport;
};
