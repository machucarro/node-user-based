module.exports.account = function(req, res){
    if(!req.isAuthenticated()){
        req.redirect("/auth/login");
    } else{
        User.findById(req.session.passport.user, function(err, user) {
            if(err) {
                console.log(err);
            } else {
                res.render('account', { user: user});
            }
        })
    }
};