var controller = require("./userDomainController");

module.exports = function (app, passport){
    app.get('/profile', passport.isLoggedIn, controller.profile.get);
}
