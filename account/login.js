const dbConnectionProvider = require('./../db/dbConnectionProvider')
const Utilities = require('./../utils')

function verifyPassword(username, password) {
    return new Promise((resolve, reject) => {
        dbConnectionProvider.getDbConnection().model('localUsers').findOne({username}, "password salt").then((err, user) => {
            if (err) return reject(false)
            if (Utilities.createSaltedHash(user.salt, password) == user.password) return resolve(true)
            reject(false)
        })
    })
}

module.exports = verifyPassword