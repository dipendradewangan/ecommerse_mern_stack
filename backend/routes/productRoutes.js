const router = require("express").Router();
const { createProduct, getAllProducts, deleteProduct, updateProduct } = require('../controller/productController')


router.get('/products', getAllProducts)

router.post('/product/new', createProduct)

router.delete('/product/:id', deleteProduct)

router.put('/product/:id',updateProduct)

module.exports = router;

