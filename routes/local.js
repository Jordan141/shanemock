const express = require('express')
const passport = require('./../passport')
const router = express.Router()
const Users = require('./../db/schema/localUser')

router.get('/', function(req, res) {
    console.log('main')
    res.send('main')
})

router.post('/signup', function(req, res) {
    console.log('signup')
    res.send('signup')
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