const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

mongoose.connect(`mongodb://${dbUser}:${dbPassword}@ds052649.mlab.com:52649/shanemock`, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind('console', 'connection error:'))


exports.user = require('./users')