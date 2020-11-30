const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const localUser = require('../../db/schema/localUser')
const verifyPassword = require('./../../account/login')

const local = new LocalStrategy((username, password, done) => {
    localUser.findOne({username : username})
    .then(function(user) {
        verifyPassword(username, password)
        .then((result) => {
            console.log(result)
            if(result) return done(null, user)
        })
        .catch((err) => {
            return done(null, false, { message: 'Incorrect password.' })
        })
    })
    .catch((err) => {
        console.log(err)
        return done(err)
    })
})

module.exports = local