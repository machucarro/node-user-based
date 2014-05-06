var UserDomainController = require("./UserDomainController");

module.exports = function (app){
    var controller = new UserDomainController();
    app.get('/account', controller.account.get);
}
