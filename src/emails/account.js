const sgMail = require('@sendgrid/mail')
const { send } = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jonatassallazar@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendUnsubscribeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jonatassallazar@gmail.com',
        subject: 'Unscribed with Success',
        text: `Hi ${name}, we are sorry that you leave the app, please tell us what went wrong. Take Care`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendUnsubscribeEmail
}