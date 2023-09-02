const jwt = require("jsonwebtoken");



const sendToken = async (res, user, statusCode)=>{


    const token = await user.getUserToken()
    console.log(token);
    const cookieOption = {
        httpOnly: true, //to prevent access to the token from javascript.

    }
    res.status(statusCode).cookie("token" , token).json({
        success : true,
        token
    })
}   

module.exports = sendToken