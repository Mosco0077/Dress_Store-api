const Category = require('../models/Categories')

const createCategory = async (req, res) => {
    try {
        const cat = await Category.create(req.body)
    
        return res.status(200).json({cat})
        
    } catch (error) {
        res.status(500).json({msg: error})
        console.log(error);
    }
}

const getAllCats = async (req, res) => {
    try {
        const cats = await Category.find({})
        if(!cats){
            return res.status(404).json({msg: "No categories found"})
        }
        return res.status(200).json({cats})
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    createCategory,
    getAllCats
}