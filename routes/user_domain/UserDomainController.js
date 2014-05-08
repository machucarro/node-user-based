module.exports = function UserDomainController(){

    if(!(this instanceof UserDomainController)){
        return new UserDomainController();
    }

    this.get = {
        'profile': function (req, res) {
            res.render('user_domain/profile', {
                user : req.user // get the user out of session and pass to template
            });
        }
    }
};