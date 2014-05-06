module.exports.home = function(req, res){
    res.render("index.html");
};
module.exports.ping = function(req, res){
    res.end("pong!");
};

