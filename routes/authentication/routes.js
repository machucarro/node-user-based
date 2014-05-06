var AuthenticationController = require("./AuthenticationController");
module.exports = function (app, passport) {
    var controller = new AuthenticationController(passport);

    /* == Traditional login and signup ===============================================*/
    app.get('/auth/login', controller.login.get);

    app.post('/auth/login', controller.login.post);

    app.get('/auth/signup', controller.signup.get);

    app.post('/auth/signup', passport.authenticate('signup', {
        successRedirect : '/about',
        failureRedirect : '/signup',
        failureFlash : true
    }), controller.signup.post);

    /* == Oauth Facebook ===============================================*/
    app.get('/auth/facebook', passport.authenticate('facebook'), controller.oauth.get);
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), controller.oauth.callback.get);

    /* == Oauth Twitter ===============================================*/
    app.get('/auth/twitter', passport.authenticate('twitter'), controller.oauth.get);
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), controller.oauth.callback.get);

    /* == Oauth gitHub ===============================================*/
    app.get('/auth/github', passport.authenticate('github'), controller.oauth.get);
    app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), controller.oauth.callback.get);

    /* == Oauth Google ===============================================*/
    app.get('/auth/google', passport.authenticate('google'), controller.oauth.get);
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), controller.oauth.callback.get);

    /* == Logout ===============================================*/
    app.get('/auth/logout', controller.logout.get);
}
