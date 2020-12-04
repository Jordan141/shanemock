const crypto = require('crypto')
const mailer = require('../mailer')
const Utilities = require('../utils')

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
    if (!username) return false
    return Utilities.verifyCharset(Utilities.alphanumericCharset, username)
}

function verifyEmail(email) {
    if (!email) return false
    return Utilities.verifyCharset(Utilities.alphanumericCharset + '.@', email)
}

function verifyPassword(password) {
    return !!password
}

module.exports = { prepareToken, verifyEmail, verifyUsername, verifyPassword }