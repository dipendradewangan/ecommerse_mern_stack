const jwt = require("jsonwebtoken");


const sendToken = async (res, user, statusCode, message) => {

    const token = await user.getUserToken()

    const cookieOption = {
        httpOnly: true, //to prevent access to the token from javascript.
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 1000 * 60 * 60 * 24)
    }


    // seted the cookie as a token into for authenticate user

    res.status(statusCode).cookie("token", token, cookieOption).json({
        success: true,
        message,
        token

    })
}

module.exports = sendToken