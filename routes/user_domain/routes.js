var UserDomainController = require("./UserDomainController");

module.exports = function (app, authenticationService){
    var controller = new UserDomainController();
    app.get('/profile', authenticationService.isLoggedIn, controller.get.profile);
};
