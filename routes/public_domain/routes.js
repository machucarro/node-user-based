var controller = require("./publicDomainController");
module.exports = function init(app){
    app.get('/', controller.get.home);
    app.get('/ping', controller.get.ping);
}
