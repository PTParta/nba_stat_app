const contactRouter = require('express').Router()
const nodeoutlook = require('nodejs-nodemailer-outlook')
require('dotenv').config()

contactRouter.post('/', (req, res) => {

  //console.log('contact router')

  const email = req.body.email
  const message = req.body.message

  //console.log(email)
  //console.log(message)

  const sendEmail = (subject, text) => {
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      text: text,
      onError: (e) => console.log(e),
      onSuccess: (i) => console.log(i)
    }
    );
  }
  sendEmail('Comment from BBallchart user', `${message}\n\n${email}`)
  res.send('message sent')
})

module.exports = contactRouter