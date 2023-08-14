const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
        trim: true
    },
    brandName: {
        type: String,
        required: [true, "Please Enter brandname"]
    },
    description: {
        type: String,
        default : "Description not available"
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        maxLength: [8, "Price cannot be exceed 7 digits"],
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [4, "Product cannot be exceed 4 charectors"],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],

    createdBy: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref:'User',
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)