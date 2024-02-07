const Product = require('../models/Products')


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
        if(products < 1){
           return res.status(404).json({msg : "No Product found"})
        }
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


const deleteProduct = async (req, res) => {
    try {
        const {id:ProductId} = req.params
        const product = await Product.findOneAndDelete({_id:ProductId})
        if(!product){
            res.status(404).json({msg: "Product not found"})
        }
        res.status(200).json({product, msg: "Product Deleted"})
    } catch (error) {
        res.status(500).json({msg: error})
    }

}

const deleteAllProducts = async (req, res) => {
    try {
        
        const products = await Product.deleteMany({})

        if(!products){
            res.status(404).json({msg: "Product not found"})
        }
        res.status(200).json({products, msg: "Product Deleted"})
    } catch (error) {
        res.status(500).json({msg: error})
    }

}
const updateProduct = async (req, res) => {
    try {
        const {id:productId} = req.params

        const product = await Product.findOneAndUpdate({_id:productId}, req.body,
            {
                new: true,
                runValidators: true
            })
        
        if(!product){
            res.status(404).json({msg: "Product not found"})
        }
        res.status(200).json({product, msg: "Product Updated"})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    findProductByName,
    updateProduct,
    deleteProduct,
    deleteAllProducts
}