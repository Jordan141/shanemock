const LocalStrategy = require('passport-local').Strategy
const localUser = require('../../db/schema/localUser')
const verifyPassword = require('./../../account/login')

const local = new LocalStrategy((username, password, done) => {
    localUser.findOne({username})
    .then(user => verifyPassword(password, user))
    .then(result => result ? done(null, result) : done(null, false))
    .catch(() => { return done("Error occured") })
})

module.exports = local