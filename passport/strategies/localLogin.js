const LocalStrategy = require('passport-local').Strategy
const Users = require('../../db/schema/localUser')
const verifyPassword = require('./../../account/login')

const local = new LocalStrategy(
    function(username, password, done) {
        Users.findOne({username : username}, function (err, user) {
            if (err) return done(err)
            if (!user) return done(null, false, { message: 'Incorrect username.' });
            verifyPassword(username, password).then(function(result) {
                if(result) return done(null, user); else done(null, false, { message: 'Incorrect password.' })
            })
        })
    }
)

module.exports = local