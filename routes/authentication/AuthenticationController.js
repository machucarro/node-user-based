module.exports = function AuthenticationController (passport) {
    if (!(this instanceof AuthenticationController)) {
        return new AuthenticationController();
    }

    /* == Traditional login and signup ===============================================*/
    this.login = {
        'get': function (req, res) {
            res.render('login.html', { message: req.flash('error') });
        },
        'post': function (req, res) {
            passport.authenticate('login', {
                successRedirect: '/about',
                failureRedirect: '/login',
                failureFlash: true
            })
        }
    };

    this.signup = {
        'get': function (req, res) {
            res.render('signup.html', { message: req.flash('signuperror') });
        },
        'post': function (req, res) {
        }
    };

    /* == Oauth Authentications ===============================================*/
    this.oauth = {
        'get': function (req, res) {
        },
        'callback': {
            'get': function (req, res) {
                res.redirect('/account');
            }
        }
    };
    /*== Logout ================================================================*/
    this.logout = {
        'get': function (req, res) {
            req.logout();
            res.redirect('/');
        }
    }
};

