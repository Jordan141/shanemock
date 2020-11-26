const Schema = require('mongoose').Schema
const conn = require('./../dbConnectionProvider')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    }
})

userSchema.plugin(uniqueValidator, {message: 'DUPLICATE KEY ERROR'})
const UserModel = conn.getDbConnection().model('users', userSchema)

module.exports = UserModel