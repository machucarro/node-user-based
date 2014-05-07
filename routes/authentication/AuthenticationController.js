module.exports = {

    /* == Traditional login and signup ===============================================*/
    login: {
        'get': function (req, res) {
            res.render('login.html', { message: res.flash('loginMessage') });
        }
    },

    signup: {
        'get': function (req, res) {
            res.render('signup.html', { message: req.flash('signupMessage') });
        }
    },

    /*== Logout ================================================================*/
    logout: {
        'get': function (req, res) {
            req.logout();
            res.redirect('/');
        }
    }
};

