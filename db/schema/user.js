const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const dbConnection = require('./../dbConnectionProvider').getDbConnection()

const userSchema = mongoose.Schema({
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
const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel