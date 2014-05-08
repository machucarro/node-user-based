var AuthenticationController = require("./authenticationController");
module.exports = function (app, authenticationService) {
    var controller = new AuthenticationController(authenticationService);

/*=== GET pages ============================================================*/
    app.get('/auth/signup', controller.get.signup);
    app.get('/auth/login', controller.get.login);

/*=== ACTIONS==============================================================*/
    /* == Signup ==========================================================*/
    app.post('/auth/signup', controller.auth.local.signup({
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/auth/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    /* == Login ==========================================================*/
    app.post('/auth/login', controller.auth.local.login({
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/auth/login', // redirect back to the login page if there is an error
        failureFlash : true // allow flash messages
    }));

    /* == Logout ===============================================*/
    app.get('/auth/logout', controller.logout({redirectUrl: '/'}));

    /* == Oauth Facebook ===============================================*/
    app.get('/auth/facebook', controller.auth.facebook.authenticate);
    app.get('/auth/facebook/callback', controller.auth.facebook.callback({ successRedirect : '/profile', failureRedirect: '/' }));

    /* == Oauth Twitter ===============================================*/
    app.get('/auth/twitter', controller.auth.twitter.authenticate);
    app.get('/auth/twitter/callback', controller.auth.twitter.callback({ successRedirect : '/profile', failureRedirect: '/' }));

    /* == Oauth gitHub ===============================================*/
    app.get('/auth/github', controller.auth.github.authenticate);
    app.get('/auth/github/callback', controller.auth.github.callback({ successRedirect : '/profile', failureRedirect: '/' }));

    /* == Oauth Google ===============================================*/
    app.get('/auth/google', controller.auth.google.authenticate);
    app.get('/auth/google/callback', controller.auth.google.callback({ successRedirect : '/profile', failureRedirect: '/' }));

}
