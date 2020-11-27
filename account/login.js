const dbConnectionProvider = require('./../db/dbConnectionProvider')
const Utilities = require('./../utils')

function verifyPassword(username, password) {
    return new Promise((resolve, reject) => {
        dbConnectionProvider.getDbConnection().model('localUsers').findOne({username}, "password salt", function (err, user) {
            if (err) reject(false)
            if (Utilities.createSaltedHash(user.salt, password) == user.password) resolve(true)
            reject(false)
        })
    })
}

module.exports = verifyPassword