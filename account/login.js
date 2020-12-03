const dbConnectionProvider = require('./../db/dbConnectionProvider')
const Utilities = require('./../utils')
const localUser = require('./../db/schema/localUser')

function verifyPassword(username, password) {
    return new Promise((resolve, reject) => {
        localUser.findOne({username}).then((user) => {
            if (Utilities.createSaltedHash(user.salt, password) == user.password) return resolve(user)
            reject()
        }).catch((err) => {
            return reject(err)
        })
    })
}

module.exports = verifyPassword