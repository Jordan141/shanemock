const passport = require('passport')
const strategy = require('passport-local').strategy
const users = require('./../../db/schema/user')

const local = new strategy(
    function(username, password, done) {
        users.findOne({username : username}, function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
            //valid password
            return done(null, user)
        })
    }
)