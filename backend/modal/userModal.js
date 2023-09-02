const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

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
    }

})


userSchema.pre("save", function () {
    console.log(this)
    this.password = bcryptjs.hashSync(this.password, 10)
    console.log(this)
})


userSchema.methods.comparePassword = async (data) => {
    return await bcryptjs.compare(data, this.password)
}

module.exports = mongoose.model("User", userSchema)