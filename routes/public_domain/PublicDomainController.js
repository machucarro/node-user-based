module.exports = function PublicDomainController () {
    if (!(this instanceof PublicDomainController)) {
        return new PublicDomainController();
    }
    this.home = {
        'get': function (req, res) {
            res.render("index.html");
        }
    }
    this.ping = {
        'get': function (req, res) {
            res.end("pong!");
        }
    }
};

