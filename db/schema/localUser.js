const { Schema, model } = require('mongoose')
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
    }
})

const LocalUserModel = model('localUsers', localUserSchema)

module.exports = LocalUserModel