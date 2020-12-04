const express = require('express')
const passport = require('./../passport')
const router = express.Router()
const localUser = require('./../db/schema/localUser')
const Utilities = require('../utils')
const { verifyUsername, verifyEmail, verifyPassword } = require('./../account/verification')

router.get('/', (req, res) => {
    res.send('main')
})

router.post('/signup', (req, res) => {
    const {username, email, password} = req.body
    if (!verifyUsername(username) || !verifyEmail(email) || !verifyPassword(password)) return res.sendStatus(400)
    const salt = Utilities.generateSalt(Utilities.hashLength)
    const hashedPassword = Utilities.createSaltedHash(salt, password)

    const newUser = {
        username,
        email,
        password: hashedPassword,
        salt
    }

    localUser.create(newUser, (err, newUser) => {
        if (err) return res.sendStatus(400)
        res.send('signup')
    })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('login')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})

module.exports = router