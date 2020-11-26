const dbConnectionProvider = require('./../db/dbConnectionProvider')
const Utilities = require('./../utils')

function verifyPassword(username, password) {
    dbConnectionProvider.getDbConnection().model('localUsers').findOne({username}, "password salt", function (err, user) {
        console.log('conn')
        if (err) return false
        if (Utilities.createSaltedHash(user.salt, password) == user.password) return true
        return false
    })
}

module.exports = verifyPassword