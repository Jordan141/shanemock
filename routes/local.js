const express = require('express')
const passport = require('./../passport')
const router = express.Router()
const User = require('./../db/schema/localUser')
const Utilities = require('../utils')

router.get('/', function(req, res) {
    console.log('main')
    res.send('main')
})

router.post('/signup', function(req, res) {
    if (req.body.username === null || req.body.username === undefined) return res.sendStatus(400)
    if (req.body.email === null || req.body.email === undefined) return res.sendStatus(400)
    if (req.body.password === null || req.body.password === undefined) return res.sendStatus(400)

    //NEED MORE PROFESSIONAL VERIFICATION

    const salt = Utilities.generateSalt(80)
    const password = Utilities.createSaltedHash(salt, req.body.password)

    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: password
    }

    User.create(newUser, function(err, newUser) {
        if (err) return res.sendStatus(400)
        console.log(newUser)
        res.send('signup')
    })
    
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log('login')
    res.send('login')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})

module.exports = router