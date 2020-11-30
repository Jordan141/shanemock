const Schema = require('mongoose').Schema
const conn = require('./../dbConnectionProvider')
//TODO UNIQUE VALIDATOR

const localUserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
})

const localUser = conn.getDbConnection().model('localUsers', localUserSchema)

module.exports = localUser