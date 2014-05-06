module.exports = function UserDomainController () {
    if (!(this instanceof UserDomainController)) {
        return new UserDomainController();
    }

    this.account = {
        'get': function (req, res) {
            if (!req.isAuthenticated()) {
                req.redirect("/auth/login");
            } else {
                User.findById(req.session.passport.user, function (err, user) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.render('account', { user: user});
                    }
                })
            }
        }
    };
};