var PublicDomainController = require("./publicDomainController");
module.exports = function init(app){
    var controller = new PublicDomainController();
    app.get('/', controller.get.home);
    app.get('/ping', controller.get.ping);
};
