module.exports = function AuthenticationController (authenticationService){

    if(!(this instanceof AuthenticationController)){
        return new AuthenticationController(authenticationService);
    }

    /* == GET pages ===============================================*/
    this.get = {
        'login': function (req, res) {
            res.render('authentication/login', { message: req.flash('loginMessage') });
        },
        'signup': function (req, res) {
            res.render('authentication/signup', { message: req.flash('signupMessage') });
        }
    };

    /*== Logout ================================================================*/
    this.logout = function(redirectOptions){
        return function (req, res) {
            req.logout();
            res.redirect(redirectOptions.redirectUrl || '/');
        };
    };
};

