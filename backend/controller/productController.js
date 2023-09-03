const productSchema = require('../modal/productModal');
const catchAsyncError = require('./catchAsyncError')
const ErrorHandler = require('../utils/errorHandler')


const getAllProducts = catchAsyncError( async (req, res) => {

    const allProducts = await productSchema.find();
    if(!allProducts){
        return next(new ErrorHandler())
    }
    
    res.status(200).json({
        success : true,
        message: 'All Products',
        data : allProducts
    })
    
})

const createProduct = catchAsyncError(async (req, res, next) => {
    const {_id} = req.user;
    const product = productSchema.create({...req.body, createdBy : _id});
    res.status(201).json({
        success: true,
        message: "successfully created",
        data: product
    })
})


const deleteProduct = async (req, res) => {
    const id = req.params.id;
    // find the user with this id and remove it from db
    const product = await productSchema.findById(id)
    if (!product) {
        res.status(404).json({
            success: false,
            message: 'Product Not found!'
        })
    }
    await productSchema.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: 'Product successfully deleted'
    })
}


const updateProduct = async (req, res) => {
    const id = req.params.id
    let updateData = {
        ...req.body
    }

    const updatedData = await productSchema.findByIdAndUpdate(id, updateData);
    res.status(200).json({
        success: true,
        message: "Product successfully updated!",
        data: updatedData
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    updateProduct

}