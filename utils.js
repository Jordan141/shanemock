const crypto = require('crypto')

class Utilities {
	static alphanumericCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz0123456789"
	static hashLength = 80

	static verifyCharset(charset, text) {
		const hasUndesirableChars = [...text].some((element) => !charset.includes(element))
		return !hasUndesirableChars
	}

    static generateSalt (size) {
		if (!size) return null
		return crypto.randomBytes(size).toString('base64')
	}

	static createSaltedHash(salt = null, passpharse = null) {
		if(passpharse === null || salt === null)
			return null
		
		const hash = crypto.createHash('sha256')
		return  hash.update(passpharse + salt).digest('hex')	
	}
}

module.exports = Utilities