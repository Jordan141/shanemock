const LocalStrategy = require('passport-local').Strategy
const Users = require('../../db/schema/localUser')
const verifyPassword = require('./../../account/login')

const local = new LocalStrategy(
    function(username, password, done) {
        Users.findOne({username : username}, function (err, user) {
            if (err) return done(err)
            if (!user) return done(null, false, { message: 'Incorrect username.' });
            console.log(verifyPassword(username, password))
            if (!verifyPassword(username, password)) return done(null, false, { message: 'Incorrect password.' })
            return done(null, user)
        })
    }
)

// ASYNC

module.exports = local