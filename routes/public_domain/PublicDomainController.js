module.exports = {

/*=== GET Pages ==================================================*/
    get : {
        'home': function (req, res) {
            res.render("public_domain/index");
        },
        'ping': function (req, res) {
            res.end("pong!");
        }
    }
};

