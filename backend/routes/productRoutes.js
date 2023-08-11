const router = require("express").Router();
const { createProduct } = require('../controller/productController')


router.get('/', (req, res) => {
    res.send("get request")
})

router.post('/product/new', createProduct)

router.delete('/', (req, res) => {
    res.send("delete request")
})

router.put('/', (req, res) => {
    res.send("put request")
})

module.exports = router;

