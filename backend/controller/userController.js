const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler")
const userModal = require("../modal/userModal")
const sendToken = require("../utils/sendToken.js");
const sendEmail = require("../utils/sendEmail");

const registerUser = catchAsyncError(async (req, res, next) => {
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
        success: true,
        message: "successfully Registered!",
        data: user
    })
})


const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter email or password", 400))
    }

    const user = await userModal.findOne({ email }).select("+password")

    if (!user) {
        return next(new ErrorHandler("Invalid username or password", 401))
    }

    const isMatchedPassword = await user.comparePassword(password)

    if (!isMatchedPassword) {
        return next(new ErrorHandler("Invalid Username or Password", 401));
    }

    sendToken(res, user, 200);

})


const logoutUser = catchAsyncError((req, res, next) => {
    const cookieOption = {
        httpOnly: true,
        expires: new Date(Date.now())
    }

    res.cookie("token", null, cookieOption);

    res.status(200).json({
        success: true,
        message: "Logout successfully"
    })
})


// update password using authenticated by oldPassword typing
const updatePassword = catchAsyncError(async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
        return next(new ErrorHandler('please enter all fields', 400))
    }

    const user = await userModal.findById(req.user.id).select("+password");


    const isMatchedPassword = await user.comparePassword(oldPassword)

    if (!isMatchedPassword) {
        return next(new ErrorHandler("You are not authenticated Please Enter a valid Old password", 401))
    }

    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("New and Confirm passwords do not matched", 401))
    }

    user.password = newPassword;

    user.save()

    res.status(200).json({
        success: true,
        message: "Password has successfully changed!"
    })
})


const forgotPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    const user = await userModal.findOne({ email })

    if (!user) {
        return next(new ErrorHandler(`No User Found with this Email ${email}`, 404));
    }

    user.getResetPasswordToken()

    const emailContent = {
        email: user.email,
        subject: "2testing email",
        text: "Hello this is testing mail from node js server",
    }
    try {

        sendEmail(emailContent)
        res.status(200).json({
            success: true,
            message: `Mail sent Successfully to ${emailContent.email}`
        })
    }
    catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordToken = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500))
    }


})




module.exports = { registerUser, loginUser, logoutUser, updatePassword, forgotPassword }