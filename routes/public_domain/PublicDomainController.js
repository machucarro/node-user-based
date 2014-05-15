var authConfig = require("./../../config/auth");
module.exports = function PublicDomainController(){

    if(!(this instanceof PublicDomainController)){
        return new PublicDomainController();
    }

/*=== GET Pages ==================================================*/
    this.get = {
        'home': function (req, res) {
            res.render("public_domain/index",authConfig);
        },
        'ping': function (req, res) {
            res.end("pong!");
        }
    };
};

