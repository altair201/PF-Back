const nodemailer = require('nodemailer')
const {USER_EMAIL, USER_PASSWORD}= process.env

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: USER_EMAIL,
        pass: USER_PASSWORD
    }
})

transporter.verify()
.then(()=>console.log("Email sent succesful via gmail"))
.catch((error)=>console.log(error))

module.exports = transporter