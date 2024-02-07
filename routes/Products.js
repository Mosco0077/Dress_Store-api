const express = require('express')

const router = express.Router()

const {
     getAllProducts,
     getProduct, 
     findProductByName, 
     createProduct,
     updateProduct, 
     deleteProduct,
     deleteAllProducts
        } = require('../controllers/Products')
const {
    createCategory,
    getAllCats
} = require('../controllers/Categories')

router.route('/')
    .get(getAllProducts)
    .post(createProduct)
    .delete(deleteAllProducts)
    

router.route('/category')
    .get(getAllCats)
    .post(createCategory)

router.route('/:name')
    .get(findProductByName)

router.route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)


module.exports = router