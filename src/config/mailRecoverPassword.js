const recover = require("../helpers/mailRecoverPasswordHTML");
const transporter = require("./transporter");
const {USER_EMAIL} = process.env

const mailRecoverPassword = async (email, recoveryCode) => {

    const HTML = recover(recoveryCode)
    await transporter.sendMail({
        from: `Lady Fit Lovers ${USER_EMAIL}`,
        to: email,
        subject: 'Recuperación de contraseña',
        html: HTML
    })
}

module.exports = mailRecoverPassword;