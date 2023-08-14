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
            message : error.message
        })
    }
}


const deleteProduct = async (req, res)=>{
    const id = req.params.id;
    // find the user with this id and remove it from db
    const product = await productSchema.findById(id)
    if(!product){
        res.status(404).json({
            success:false,
            message : 'Product Not found!'
        })
    }
    await productSchema.findByIdAndDelete(id);

    res.status(200).json({
        success :true ,
        message : 'Product successfully deleted'
    })
}


const updateProduct = async (req, res)=>{
    const id = req.params.id
    console.log(id);
    let updateData = {
        ...req.body
    }

    const updatedData = await productSchema.findByIdAndUpdate(id, updateData);
    res.status(200).json({
        success : true,
        message : "Product successfully updated!",
        data : updatedData
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    updateProduct

}