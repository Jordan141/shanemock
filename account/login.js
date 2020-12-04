const Utilities = require('./../utils')

function verifyPassword(password, user) {
    if (Utilities.createSaltedHash(user.salt, password) == user.password) return user
}

module.exports = verifyPassword