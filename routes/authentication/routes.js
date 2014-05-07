var controller = require("./authenticationController");
module.exports = function (app, passport) {

    /* == Traditional login and signup ===============================================*/

    app.get('/auth/signup', controller.signup.get);

    app.post('/auth/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/auth/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/auth/login', controller.login.get);

    app.post('/auth/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/auth/login', // redirect back to the login page if there is an error
        failureFlash : true // allow flash messages
    }));

    /* == Oauth Facebook ===============================================*/
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect : '/profile', failureRedirect: '/' }));

    /* == Oauth Twitter ===============================================*/
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect : '/profile', failureRedirect: '/' }));

    /* == Oauth gitHub ===============================================*/
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', passport.authenticate('github', { successRedirect : '/profile', failureRedirect: '/' }));

    /* == Oauth Google ===============================================*/
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { successRedirect : '/profile', failureRedirect: '/' }));

    /* == Logout ===============================================*/
    app.get('/auth/logout', controller.logout.get);
}
