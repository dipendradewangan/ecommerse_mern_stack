const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler")
const userModal = require("../modal/userModal")
const sendToken = require("../utils/sendToken.js");

const registerUser = catchAsyncError(async (req, res, next)=>{
    const {
        name,
        email,
        mobile,
        password 
    } = req.body;
    const user = await userModal.create({
        name, email, mobile, password
    });
    res.status(201).json({
        success : true,
        message : "successfully Registered!",
        data : user
    })
})


const loginUser = catchAsyncError(async (req, res, next)=>{
    const {email, password} = req.body
    if(!email || !password){
        return next(new ErrorHandler("Please Enter email or password", 400))
    }

    const user = await userModal.findOne({email}).select("+password")
    
    if(!user){
        return next(new ErrorHandler("Invalid username or password", 401))
    }

    const isMatchedPassword = await user.comparePassword(password)
    
    if(!isMatchedPassword){
        return next(new ErrorHandler("Invalid Username or Password", 401));
    }

    sendToken(res, user, 200);

})
module.exports = {registerUser, loginUser}