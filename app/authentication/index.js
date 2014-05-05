var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GithubStrategy = require('passport-github').Strategy;
//var GoogleStrategy = require('passport-google').Strategy;
//var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('./../../config');
var tokenResponseHandler = require('./OauthTokenResponseHandler.js');

module.exports.init = function () {
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

    var facebookStrategy = new FacebookStrategy(config.oauth.facebook, tokenResponseHandler.handle);
    var githubStrategy = new GithubStrategy(config.oauth.facebook, tokenResponseHandler.handle);
//    var googleStrategy = new GoogleStrategy(config.oauth.facebook, tokenResponseHandler.handle);
//    var twitterStrategy = new TwitterStrategy(config.oauth.facebook, tokenResponseHandler.handle);
    passport.use(facebookStrategy);
    passport.use(githubStrategy);
//    passport.use(googleStrategy);
//    passport.use(twitterStrategy);

};
