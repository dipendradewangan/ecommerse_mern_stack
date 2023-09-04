const catchAsyncError = require("../controller/catchAsyncError");
const nodemailer = require("nodemailer");

const sendEmail = catchAsyncError(async (options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port : 465,
        secure : false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })


    const mailOptions = {
        from : process.env.SMTP_EMAIL,
        to : options.email,
        subject : options.subject,
        text : options.text,
        html : `<b>${options.text}</b>`
    }

    await transporter.sendMail(mailOptions)
})


module.exports = sendEmail;