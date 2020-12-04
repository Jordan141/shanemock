const mongoose = require('mongoose')

const URL = process.env.DB_URL

module.exports = () => {
    const db = mongoose.createConnection(URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    db.on('error', err => {
        const errorText = `Failed to connect to database with url ${URL}, Error: ${err}`
        console.error(errorText)
        throw new Error(errorText)
    })
    db.once('open', () => console.log('Connected to the database.'))
    return db
}