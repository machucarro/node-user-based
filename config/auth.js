/**
 * Oauth config management
 */

exports.google = {
    'clientID': process.env.OAUTH_GOO_CID || "",
    'clientSecret': process.env.OAUTH_GOO_SECRET || "",
    'callbackURL': process.env.OAUTH_GOO_CALLBACKURL || "http://127.0.0.1:3000/auth/google/callback"
};
exports.github = {
    'clientID': process.env.OAUTH_GITHUB_ID || "",
    'clientSecret': process.env.OAUTH_GITHUB_SECRET || "",
    'callbackURL': process.env.OAUTH_GITHUB_CALLBACKURL || "http://127.0.0.1:3000/auth/github/callback"
};
exports.facebook = {
    'clientID': process.env.OAUTH_FACEBOOK_ID || "",
    'clientSecret': process.env.OAUTH_FACEBOOK_SECRET || "",
    'callbackURL': process.env.OAUTH_FACEBOOK_CALLBACKURL || "http://127.0.0.1:3000/auth/facebook/callback"
};
exports.twitter = {
    'clientID': process.env.OAUTH_TW_CID || "",
    'clientSecret': process.env.OAUTH_TW_SECRET || "",
    'callbackURL': process.env.OAUTH_TW_CALLBACKURL || "http://127.0.0.1:3000/auth/twitter/callback"
};
exports.local = {
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
};
