const LocalStrategy = require('passport-local').Strategy
const users = require('../../db/schema/user')

const local = new LocalStrategy(
    function(username, password, done) {
        console.log('OK')
        users.findOne({username : username}, function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
            //valid password
            return done(null, user)
        })
    }
)

module.exports = local