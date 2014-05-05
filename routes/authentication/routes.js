var controller = require("./controller");
module.exports = function (app, passport) {
    app.get('/auth/login', controller.login.get);

    app.post('/auth/login', );

    app.get('/auth/signup', function(req, res) {
        res.render('signup.html', { message: req.flash('signuperror') });
    });

    app.post('/auth/signup', passport.authenticate('signup', {
        successRedirect : '/about',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    app.get('/auth/facebook', passport.authenticate('facebook'), function (req, res) {
            });
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
                res.redirect('/account');
            });
    app.get('/auth/twitter', passport.authenticate('twitter'), function (req, res) {
            });
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), function (req, res) {
                res.redirect('/account');
            });
    app.get('/auth/github', passport.authenticate('github'), function (req, res) {
            });
    app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), function (req, res) {
                res.redirect('/account');
            });
    app.get('/auth/google', passport.authenticate('google'), function (req, res) {
            });
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
                res.redirect('/account');
            });
    app.get('/auth/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
}
