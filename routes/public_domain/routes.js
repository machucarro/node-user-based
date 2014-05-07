var controller = require("./publicDomainController");
module.exports = function init(app){
    app.get('/', controller.home.get);
    app.get('/ping', controller.ping.get);
}
