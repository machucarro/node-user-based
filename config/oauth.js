/**
 * Oauth config management
 */

exports.google = {
    'clientID': process.env.OAUTH_GOO_CID || "CLIENTID",
    'clientSecret': process.env.OAUTH_GOO_SECRET || "SECRET",
    'callbackURL': process.env.OAUTH_GOO_CALLBACKURL || "http://127.0.0.1:3000/auth/google/callback"
};
exports.github = {
    'clientID': process.env.OAUTH_GITHUB_ID || "CLIENTID",
    'clientSecret': process.env.OAUTH_GITHUB_SECRET || "SECRET",
    'callbackURL': process.env.OAUTH_GITHUB_CALLBACKURL || "http://127.0.0.1:3000/auth/github/callback"
};
exports.facebook = {
    'clientID': process.env.OAUTH_FACEBOOK_ID || "CLIENTID",
    'clientSecret': process.env.OAUTH_FACEBOOK_SECRET || "SECRET",
    'callbackURL': process.env.OAUTH_FACEBOOK_CALLBACKURL || "http://127.0.0.1:3000/auth/facebook/callback"
};
exports.twitter = {
    'clientID': process.env.OAUTH_TW_CID || "CLIENTID",
    'clientSecret': process.env.OAUTH_TW_SECRET || "SECRET",
    'callbackURL': process.env.OAUTH_TW_CALLBACKURL || "http://127.0.0.1:3000/auth/twitter/callback"
};
