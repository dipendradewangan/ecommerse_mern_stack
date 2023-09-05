const catchAsyncError = require("../controller/catchAsyncError");
const ErrorHandler = require('./errorHandler');
const nodemailer = require("nodemailer");

const sendEmail = catchAsyncError(async (options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        // service : "gmail",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })


    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: options.email,
        subject: options.subject,
        text: options.text,
        html: `
                    <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                    }

                    .tamplate{
                        background-color: rgb(245, 245, 245);
                        border-radius: 10px;
                        padding: 30px;
                        width: 500px;
                        margin: 30px auto;
                        
                    }
                    .welcome {
                        margin: 10px;
                        color: tomato;
                        font-size: 30px;
                        font-family: calibri;
                        font-weight: bold;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .container{
                        padding: 20px;
                        text-align: center;
                        background-color: white;
                        border-radius: 5px;
                        padding-top: 10px;
                    }

                    .heading{
                        font-family: calibri;
                        font-size: 20px;
                        padding : 20px
                    }

                    .subject{
                        font-family: calibri;
                        font-size: 15px;
                        margin-bottom: 5px;
                    }

                    .text, .email, .url{
                        font-family: calibri;
                        font-size: 13px;
                        margin-bottom: 30px;
                    }

                    .email, .url{
                        margin-bottom: 10px;
                    }
                    .url-btn{
                        padding: 15px;
                        border: 1px solid white;
                        background-color: rgb(13, 168, 207);
                        color: white;
                        font-family: sans-serif;
                        margin-bottom: 20px;
                        cursor: pointer;
                        transition: 0.5s;
                    }

                    .url-btn:hover{
                        background-color: rgb(93, 165, 247);
                    }


                    
                </style>
            </head>

            <body>
                <div class="tamplate">
                    <h1 class="welcome">WELCOME TO ECOMMERSE</h1>
                    <div class="container">
                        <h1 class="heading">Reset your password</h1>
                        <h2 class="subject">
                            Someone requested that the password be reset for the following account
                        </h2>
                        <p class="text">
                            to reset your password, click the following button or visit the
                            following url
                        </p>
                        <a class="link" href="/index.html">
                            <button class="url-btn">CLICK HERE TO RESET YOUR PASSWORD</button>
                        </a>

                        <p class="email">Your Email : ${options.email}</p>
                        <p class="url">http://localhost:8080/api/password/forgot</p>
                        <h3 class="text">If this was a mistake, just ignore this email and nothing and will happen</h3>

                    </div>
                </div>
            </body>

            </html>
        `
    }

    await transporter.sendMail(mailOptions)
})


module.exports = sendEmail;