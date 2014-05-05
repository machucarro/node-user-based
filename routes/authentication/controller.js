
module.exports = function Controller(passport){
    if(!(this instanceof Controller)){
        return new Controller();
    }
    this.login = {
        'get': function(req, res){
            res.render('login.html', { message: req.flash('error') });
        },
        'post': function(req, res){
            passport.authenticate('login', {
                successRedirect : '/about',
                failureRedirect : '/login',
                failureFlash : true
            })
        }
    };
};
