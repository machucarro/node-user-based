var PublicDomainController = require("./PublicDomainController");
module.exports = function init(app){
    var controller = new PublicDomainController();
    app.get('/', controller.home.get);
    app.get('/ping', controller.ping.get);
}
