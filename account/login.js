const dbConnectionProvider = require('./../db/dbConnectionProvider')
const Utilities = require('./../utils')
const localUser = require('./../db/schema/localUser')

function verifyPassword(username, password) {
    return new Promise((resolve, reject) => {
        localUser.findOne({username}, 'password salt')
        .then((user) => {
            if (Utilities.createSaltedHash(user.salt, password) == user.password) return resolve(true)
            reject(false)
        })
        .catch((err) => {
            return reject(false)
        })
    })
}

module.exports = verifyPassword