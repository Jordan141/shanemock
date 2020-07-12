const mongoose = require('mongoose')
mongoose.connect('', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind('console', 'connection error:'))


exports.user = require('./users')