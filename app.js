const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000
const cookieSession = require("cookie-session")
const db = require('./db') //Init Database Connection
const passport = require('./passport')

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieSession({maxAge: 24*60*60*1000, keys: [process.env.SECRET_COOKIE]}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {user: req.user})
})

app.post('/signup', passport.authenticate('signup'), function(req, res) {
    //signup ok
    res.send('signup ok')
})

app.post('/login', passport.authenticate('local'), function(req, res) {
    //auth ok
    res.send('login ok')
})

app.get('/auth/google', passport.authenticate('google', {scope: ['profile, email']}))

app.get('/logout', (req, res) => {
    req.logout()
    res.send(req.user)
})
//app.use('/', router)

app.listen(PORT)