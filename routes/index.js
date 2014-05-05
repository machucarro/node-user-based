module.exports = function (app, passport) {
    require("./public/routes")(app);
    require("./authentication/routes")(app,passport);
    require("./user_domain/routes")(app);
};