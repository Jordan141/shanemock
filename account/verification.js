const crypto = require('crypto')
const mailer = require('../mailer')

function prepareToken(email, VerifyModel = require('../db/schema/verify')) {
    const token = crypto.randomBytes(64).toString('hex')

    const data = {
        email,
        createdOn: new Date().getTime(),
        token
    }

    const instance = new VerifyModel(data)

    instance.save()
    .then(() => mailer.sendVerificationMail(email, token))
    .catch(console.log)
}

function verifyUsername(username) {
    if (username === undefined || username === null) return false
    const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz0123456789"
    username.foreach(function (value) {
        if (!alphanumeric.contains(value)) return false
    })
    return true
}

function verifyEmail(email) {
    if (email === undefined || email === null) return false
    if (!email.contains('@') || !email.contains('.')) return false
    if (email.indexOf('@') > email.indexOf('.')) return false
    if (!email.split('@')[0] > 0 || !email.split('@')[1] > 0) return false
    if (!email.split('.')[0] > 0 || !email.split('.')[1] > 0) return false
    return true
}

function verifyPassword(password) {
    if (password === undefined || password === null) return false
    return true
}

module.exports = { prepareToken, verifyUsername, verifyEmail, verifyPassword }