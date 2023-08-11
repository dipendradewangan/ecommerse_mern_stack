const productSchema = require('../modal/productModal');


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
    createProduct
}