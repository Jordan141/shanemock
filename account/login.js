const dbConnectionProvider = require('./../db/dbConnectionProvider')
const Utilities = require('./../utils')
const localUser = require('./../db/schema/localUser')

function verifyPassword(password, user) {
    if (Utilities.createSaltedHash(user.salt, password) == user.password) return user
}

module.exports = verifyPassword