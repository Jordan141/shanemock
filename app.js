const express = require('express')
const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3000

const passport = require('passport')
const {Strategy} = require('passport-local')
const db = null

passport.use(new Strategy((username, password, cb) => {
    db.users.findByUsername(username, (err, user) => {
        if(err) { return cb(err)}
        if(!user) {return cb(null, false)}
        if(user.password != password) {return cb(null, false)}

        return cb(null, user)
    })
}))

passport.serializeUser((user, cb) => {
    cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
    db.users.findById(id, (err, user) => {
        if(err) {return cb(err)}
        cb(null, user)
    })
})

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {user: req.user})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/')
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

//app.use('/', router)

app.listen(PORT)