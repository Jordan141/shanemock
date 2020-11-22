const Schema = require('mongoose').Schema
const dbConnection = require('../dbConnectionProvider').getDbConnection()

//TODO UNIQUE VALIDATOR

const localUserSchema = new Schema({
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
    }
})

const LocalUserModel = dbConnection.model('users', localUserSchema)

module.exports = LocalUserModel