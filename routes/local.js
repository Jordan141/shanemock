const express = require('express')
const passport = require('./../passport')
const router = express.Router()
const User = require('./../db/schema/localUser')
const Utilities = require('../utils')
const { verifyUsername, verifyEmail, verifyPassword } = require('./../account/verification')

router.get('/', function(req, res) {
    console.log('main')
    res.send('main')
})

router.post('/signup', function(req, res) {
    if (!verifyUsername(req.body.username)) return res.sendStatus(400)
    if (!verifyUsername(req.body.email)) return res.sendStatus(400)
    if (!verifyUsername(req.body.password)) return res.sendStatus(400)

    const salt = Utilities.generateSalt(80)
    const password = Utilities.createSaltedHash(salt, req.body.password)

    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password,
        salt
    }

    User.create(newUser, function(err, newUser) {
        if (err) return res.sendStatus(400)
        console.log(newUser)
        res.send('signup')
    })
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log('login ok')
    res.send('login')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})

module.exports = router