const transporter = require('./transporter')

function createMailOptions(to, subject, text) {
    return {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    }
}

function sendMail(to, subject, text) {
    if(!mailOptions.to) console.error('Invalid mailOptions')
    transporter.sendMail(createMailOptions(to, subject, text), (err, info) => {
        if(err) console.log(err)
        console.log('Email sent:', info.response)
    })
}

function sendVerificationMail(email) {
    if(!email) throw Error('Verification email cannot be sent. Error: No email received')
    sendMail(email, 'Verify Your Email', 'TODO LATER')
}

exports.sendMail = sendMail
exports.sendVerificationMail = sendVerificationMail