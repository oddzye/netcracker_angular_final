const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys');
const User = require('../models/User');
const mongoConnection = require('../middleware/mongoConnection');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
};

module.exports = passport => {
    passport.use(new JwtStrategy(options,  (jwt_payload, done) => {
        mongoConnection( async (db) => {
            try {
                const user = await db.collection("users").findOne({email: jwt_payload.email}, (err, user) => {
                    if (err) {
                        done(err, false);
                        console.log(err);
                    }
                    if (user) {
                        done(null, user);
                        console.log(err);
                    }
                    else {
                        done(null, false);
                        console.log("WTF")
                        
                    }
                })
                console.log(jwt_payload.userId);
            }
            catch(e) {
                console.log(e);
            }
        })
        
    }));
}
