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
    passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
        try {
            const user = await db.collection("users").findById(jwt_payload.userId).select('email id')

            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
        catch(e) {
            console.log(e);
        }
        
        
    }));
}
