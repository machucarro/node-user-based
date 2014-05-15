module.exports = function (app, authenticationService) {
    // Auth0 callback handler
    app.get('/authentication/callback',
            authenticationService.authenticate('auth0', { failureRedirect: '/' }),
            function(req, res) {
                if (!req.user) {
                    throw new Error('user null');
                }
                res.redirect("/");
            });
};
