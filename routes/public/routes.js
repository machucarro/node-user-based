var controller = require("./controller");
module.exports = function init(app){
    app.get('/', controller.home);
    app.get('/ping', controller.ping);
}
