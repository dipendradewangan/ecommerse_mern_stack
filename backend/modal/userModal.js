const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your name"],
        minLength: [5, "Name should be mininum 5 charectors"],
        maxLength: [30, "Name can not exceed 30 charectors"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your email"],
        validate: [validator.isEmail, "Please Enter your valid email"],
        unique: [true, "Entered Email already registerd"]
    },
    mobile: {
        type: Number,
        required: [true, 'Enter your Mobile Number']
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,

        },
        url: {
            type: String,
        }
    },
    role: {
        type: String,
        default: "user"
    },

    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }

})


userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = bcryptjs.hashSync(this.password, 10);
    next();
})


// used old mathod of function becouse i have to use this keywork into this
userSchema.methods.comparePassword = async function (data) {
    return await bcryptjs.compare(data, this.password)
}


userSchema.methods.getUserToken = async function () {
    return await jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}


userSchema.methods.getResetPasswordToken = async function (user) {
    const resetToken = await crypto.randomBytes(20).toString('hex')
    console.log(resetToken);

    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest('hex')
    user.resetPasswordTokenExpire = Date.now() + 15 * 60 * 1000;

    // await user.save({validateBeforeSave : false})
    return resetToken;
}



module.exports = mongoose.model("User", userSchema)