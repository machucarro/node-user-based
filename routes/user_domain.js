function init(app){
    app.get('/account', ensureAuthenticated, function(req, res){
        User.findById(req.session.passport.user, function(err, user) {
            if(err) {
                console.log(err);
            } else {
                res.render('account', { user: user});
            }
        })
    });
}
