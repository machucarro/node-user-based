var User = require('./../user_domain/User.js');

exports.handle = function(token, refreshToken, profile, done) {

    // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Google
    process.nextTick(function () {

        // try to find the user based on their google id
        User.findOne({ 'github.id': profile.id }, function (err, user) {
            if (err)
                return done(err);

            if (user) {

                // if a user is found, log them in
                return done(null, user);
            } else {
                // if the user isnt in our database, create a new user
                var newUser = new User();

                // set all of the relevant information
                newUser.github.id = profile.id;
                newUser.github.token = token;
                newUser.github.name = profile.displayName;
                newUser.github.username = profile.username;
                newUser.github.email = profile.emails[0].value; // pull the first email

                // save the user
                newUser.save(function (err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
};