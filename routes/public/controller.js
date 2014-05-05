module.exports.home = function(req, res){
    req.render("index.html");
};
module.exports.ping = function(req, res){
    req.end("pong!");
};

