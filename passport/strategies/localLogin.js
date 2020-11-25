const LocalStrategy = require('passport-local').Strategy
const Users = require('../../db/schema/localUser')

const local = new LocalStrategy(
    function(username, password, done) {
        console.log('login strategy')
        Users.findOne({username : username}, function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
            //valid password
            return done(null, user)
        })
    }
)

module.exports = local