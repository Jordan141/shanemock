require('dotenv').config()
const express = require('express')
const app = express()

const cookieSession = require("cookie-session")
const connection = require('./db') //Init Database Connection
const passport = require('./passport')
const localRoutes = require('./routes/local')
const oauthRoutes = require('./routes/oauth')

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(cookieSession({maxAge: 24*60*60*1000, keys: [process.env.SECRET_COOKIE]}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', oauthRoutes)
app.use('/', localRoutes)

app.listen(process.env.PORT)