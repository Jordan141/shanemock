require('dotenv').config()
const express = require('express')
const app = express()

const cookieSession = require("cookie-session")
const connection = require('./db') //Init Database Connection
const passport = require('./passport')
const router = require('./routes/local')

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(cookieSession({maxAge: 24*60*60*1000, keys: [process.env.SECRET_COOKIE]}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router)

//app.get('/auth/google', passport.authenticate('google', {scope: ['profile, email']}))
//app.use('/', router)

app.listen(process.env.PORT)