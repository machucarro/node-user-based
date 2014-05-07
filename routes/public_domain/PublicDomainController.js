module.exports = {
    home : {
        'get': function (req, res) {
            res.render("public_domain/index");
        }
    },
    ping: {
        'get': function (req, res) {
            res.end("pong!");
        }
    }
};

