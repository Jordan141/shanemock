const express = require('express')
const router = express.Router({mergeParams: true})
const passport = require('./../passport')

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(req.user)
    res.send('You reached the redirect URI')
})

router.get('/google', passport.authenticate('google', {scope: ['profile email']}))

module.exports = router