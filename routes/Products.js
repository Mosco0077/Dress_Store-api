const express = require('express')

const router = express.Router()

const {
     getAllProducts,
     getProduct, 
     findProductByName, 
     createProduct,
     updateProduct, 
     deleteProduct
    } = require('../controllers/Products')

router.route('/')
    .get(getAllProducts)
    .post(createProduct)
    

router.route('/:name')
    .get(findProductByName)

router.route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)


module.exports = router