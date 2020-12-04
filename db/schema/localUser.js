const Schema = require('mongoose').Schema
const conn = require('./../dbConnectionProvider')
const uniqueValidator = require('mongoose-unique-validator')

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

localUserSchema.plugin(uniqueValidator, {message: 'DUPLICATE KEY ERROR'})
const localUser = conn.getDbConnection().model('localUsers', localUserSchema)

module.exports = localUser