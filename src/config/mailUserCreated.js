const welcome = require("../helpers/mailUserCreatedHTML");
const transporter = require("./transporter");
const {USER_EMAIL}=process.env;

const mailUserCreated= async (email)=>{
    const welcomeHtml = welcome()
    await transporter.sendMail({
        from: `Lady Fit Lovers ${USER_EMAIL}`,
        to: email,
        subject:"Bienvenido",
        html: welcomeHtml
    })
}
module.exports = mailUserCreated;