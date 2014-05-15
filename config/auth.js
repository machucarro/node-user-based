/**
 * Oauth config management
 */

exports.auth0 = {
    'clientID': process.env.AUTH0_CLIENT_ID || "",
    'clientSecret': process.env.AUTH0_CLIENT_SECRET || "",
    'callbackURL': process.env.AUTH0_CALLBACK_URL || "http://127.0.0.1:3000/authentication/callback",
    'domain': process.env.AUTH0_DOMAIN || ""
};