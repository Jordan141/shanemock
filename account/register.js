const Utilities = require('../utils')
const mailer = require('../mailer')
const SALT_SIZE = 80

function createRegisterController(UserModel = require('../db').user) {
    return (req, res) => {
        const salt = Utilities.createSaltedHash(SALT_SIZE)
        const password = Utilities.createSaltedHash(salt, req.body.password)

        const userData = {
            username: req.body.username,
            email: req.body.email,
            password,
            salt
        }

        const userInstance = new UserModel(userData)
        userInstance.save()
        .then(() => {
            mailer.sendVerificationMail(userData.email)
            res.send(200)
        })
        .catch(err => {
            console.warn('Register controller error:', err)
            res.send(400)
        })
    }
}

module.exports = {
    register: createRegisterController
}