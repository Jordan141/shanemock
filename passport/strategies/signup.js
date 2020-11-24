const LocalStrategy = require('passport-local').Strategy
const LocalUserModel = require('./../../db/schema/localUser')

const signup = new LocalStrategy(
    function(username, password, done) {
        console.log('signup strategy')
        LocalUserModel.findOne({username : username}, function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
            //valid password
            return done(null, user)
        })
    }
)

module.exports = signup