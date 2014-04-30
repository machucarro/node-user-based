var path = require("path");

exports.index = function(req, res){
  res.render('index', { title: "Passport-Examples", name:"manu"});
};

exports.ping = function(req, res){
  res.send("pong!", 200);
};