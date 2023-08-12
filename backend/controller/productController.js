const productSchema = require('../modal/productModal');


const getAllProducts = async (req, res)=>{
    try{
        const allProducts = await productSchema.find();
        if(!allProducts){
            res.status(404).json({
                success : false,
                message : 'Product not found!'
            })
        }

        res.status(200).json({
            success : true,
            message : "product successfully fetched!",
            data : allProducts
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const createProduct = async (req, res)=>{

    console.log(req.body)
    try{
        const product = await productSchema.create(req.body);
        res.status(201).json({
            success : true,
            message : "product successfully created!",
            data : product
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : "Internal server error!"
        })
    }
}


module.exports = {
    createProduct,
    getAllProducts
}