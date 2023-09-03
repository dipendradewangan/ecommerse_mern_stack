const router = require("express").Router();
const { createProduct, getAllProducts, deleteProduct, updateProduct } = require('../controller/productController');
const { isAuthenticateUser } = require("../middleware/auth");



router.get('/products',getAllProducts)

router.post('/product/new', isAuthenticateUser, createProduct)

router.delete('/product/:id', deleteProduct)

router.put('/product/:id', updateProduct)

module.exports = router;

