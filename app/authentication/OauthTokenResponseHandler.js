var User = require('./../user_domain/User.js');
exports.handle = function (accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (!err && user != null) {
            done(null, user);
        } else {
            var user = new User({
                oauthID: profile.id,
                name: profile.displayName,
                created: Date.now()
            });
            user.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("saving user ...");
                    done(null, user);
                }
                ;
            });
            process.nextTick(function () {
                return done(null, profile);
            });
        }
        ;
    });
};
