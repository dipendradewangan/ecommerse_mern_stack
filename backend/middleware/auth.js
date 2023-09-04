const catchAsyncError = require("../controller/catchAsyncError")
const userModal = require("../modal/userModal")
const ErrorHandler = require("../utils/errorHandler")
const jwt = require("jsonwebtoken")

const isAuthenticateUser = catchAsyncError(async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return next(new ErrorHandler("Login first to access this resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    const response = await userModal.findById(decodedData.id);

    if (!response) {
        const cookieOption = {
            httpOnly : true,
            expires : new Date(Date.now())
        }
        
        res.cookie("token", null, cookieOption);
        return next(new ErrorHandler("Unauthenticated User", 401));
    }

    req.user = response;

    next();
})


const authorisedRole = (...roles) => {
    return (req, res, next)=>{
        const isAuthorised = roles.includes(req.user.role);
        
        if(!isAuthorised){
            return next(new ErrorHandler(`Role : ${req.user.role} is not allowed to access this resourse!`, 403))
        }

        next()
    }
}

module.exports = {
    isAuthenticateUser,
    authorisedRole
}