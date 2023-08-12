const router = require("express").Router();
const { createProduct, getAllProducts } = require('../controller/productController')


router.get('/products', getAllProducts)

router.post('/product/new', createProduct)

router.delete('/', (req, res) => {
    res.send("delete request")
})

router.put('/', (req, res) => {
    res.send("put request")
})

module.exports = router;

