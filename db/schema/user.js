const Schema = require('mongoose').Schema
const uniqueValidator = require('mongoose-unique-validator')
const dbConnection = require('../dbConnectionProvider').getDbConnection()

const userSchema = new Schema({
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
        type: String
    },
    verified: {
        type: Boolean,
        default: 0,
        required
    },
    verifiedOn: {
        type: String
    }
})

userSchema.plugin(uniqueValidator, {message: 'DUPLICATE KEY ERROR'})
const UserModel = dbConnection.model('users', userSchema)

module.exports = UserModel