const update = require("../helpers/mailUpdatedPasswordHTML");
const transporter = require("./transporter");
const { USER_EMAIL } = process.env

const mailUpdatedPassword = async (email) => {
    const HTML = update();
    await transporter.sendMail({
        from: `Lady Fit Lovers ${USER_EMAIL}`,
        to: email,
        subject: 'Cambio de contraseña exitoso',
        html: HTML
    })
}

module.exports = mailUpdatedPassword;