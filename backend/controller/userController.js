const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler")
const userModal = require("../modal/userModal")

const createUser = catchAsyncError(async (req, res, next)=>{
    const data = userModal.create(req.body);
    res.status(201).json({
        success : true,
        message : "successfully Registered!",
        data : data
    })
})


module.exports = {createUser}