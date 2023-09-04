const router = require("express").Router();
const { createProduct, getAllProducts, deleteProduct, updateProduct } = require('../controller/productController');
const { isAuthenticateUser, authorisedRole } = require("../middleware/auth");



router.get('/products', getAllProducts)

router.post('/product/new', isAuthenticateUser, authorisedRole("admin"), createProduct)

router.delete('/product/:id',isAuthenticateUser, authorisedRole("admin"),  deleteProduct)

router.put('/product/:id', updateProduct)

module.exports = router;

