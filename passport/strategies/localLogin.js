const LocalStrategy = require('passport-local').Strategy
const Users = require('../../db/schema/localUser')
const verifyPassword = require('./../../account/login')

const local = new LocalStrategy(
    (username, password, done) => {
        Users.findOne({username : username}, function (err, user) {
            if (err) return done(err)
            if (!user) return done(null, false, { message: 'Incorrect username.' });
            verifyPassword(username, password).then((result) => {
                if(result) return done(null, user)
                done(null, false, { message: 'Incorrect password.' })
            })
        })
    }
)

module.exports = local