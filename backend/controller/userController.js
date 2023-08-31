const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler")

const createUser = catchAsyncError(async (req, res, next)=>{
    console.log("this is the user routes")
    return next(new ErrorHandler())
})


module.exports = {createUser}