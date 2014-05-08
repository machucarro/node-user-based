module.exports = function AuthenticationController (authenticationService){

    if(!(this instanceof AuthenticationController)){
        return new AuthenticationController(authenticationService);
    }

    /* == GET pages ===============================================*/
    this.get = {
        'login': function (req, res) {
            res.render('login', { message: res.flash('loginMessage') });
        },
        'signup': function (req, res) {
            res.render('signup', { message: req.flash('signupMessage') });
        }
    };

    /*== Logout ================================================================*/
    this.logout = function(redirectOptions){
        return function (req, res) {
            req.logout();
            res.redirect(redirectOptions.redirectUrl || '/');
        };
    };

    /* Authentications ========================================================*/
    this.auth = {
        local: {
            login: function(callbackOptions){authenticationService.authenticate('local-login', callbackOptions);},
            signup: function(callbackOptions) {return controller.authenticate('local-signup', callbackOptions)},
        } ,
        facebook: {
            authenticate: authenticationService.authenticate('facebook', { scope : 'email' }),
            callback: function (callbackOptions) {return authenticationService.authenticate('facebook', callbackOptions);}
        },
        github: {
            authenticate: authenticationService.authenticate('github'),
            callback: function (callbackOptions) {return authenticationService.authenticate('github', callbackOptions);}
        },
        twitter: {
            authenticate: authenticationService.authenticate('twitter'),
            callback: function (callbackOptions) {return authenticationService.authenticate('twitter', callbackOptions);}
        },
        google: {
            authenticate: authenticationService.authenticate('google', { scope : ['profile', 'email'] }),
            callback: function (callbackOptions) {return authenticationService.authenticate('google', callbackOptions);}
        }
    };

};

