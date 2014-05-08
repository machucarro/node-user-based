module.exports = function (app, passport) {
    require("./public_domain/routes")(app);
    require("./authentication/routes")(app,passport);
    require("./user_domain/routes")(app,passport);
};