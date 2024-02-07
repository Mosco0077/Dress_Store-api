const Product = require('../models/Products')
const Category = require('../models/Categories')

const getAllProducts = async (req, res) => {
    
    const {name} = req.query
    
    if (name){
        try {

            const single_Product = await Product.find({ name: name}).exec();
            if(!single_Product){
               return res.status(404).json({msg: 'Product not found'})
            }
            return res.status(200).json({single_Product})
        } catch (error) {
            res.status(500).json({msg: error})
        }
     }else{
    try {
        const products = await Product.find({})

        return res.status(200).json({products})

    } catch (error) {
        res.status(404).json({msg: error})
    }
    // res.send('Hit the controller')
} 
}



const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
    
        return res.status(200).json({product})
        
    } catch (error) {
        res.status(500).json({msg: error})
        console.log(error);
    }
}

const getProduct = async (req, res) => {
    try {
        // const {id:productID} = req.params
        const product = await Product.findOne({_id:req.params.id})
        if(!product){
           return res.status(404).json({msg: 'Product not found'})
        }
       return res.status(200).json({product})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    // res.json({id: req.params.id})
}

const findProductByName = async (req, res) => {
    try {

        const {name} = req.params
        const single_Product = await Product.findOne({ name }).exec();
        if(!single_Product){
           return res.status(404).json({msg: 'Product not found'})
        }
        return res.status(200).json({single_Product})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    //  res.end()
}

const updateProduct = (req, res) => {
    res.send('Update Single Product Initiated')
}
const deleteProduct = (req, res) => {
    res.send('Delete Single Product Initiated')
}

module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    findProductByName,
    updateProduct,
    deleteProduct
}