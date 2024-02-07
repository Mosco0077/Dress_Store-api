const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Must provide a name'],
        trim:true,
        maxlength: [20, 'Name cannot be more than 20 chars']
    },
    description: {
        type:String,
        required: [true, 'Must provide a description'],
        trim:true,
        maxlength: [80, 'Desc cannot be more than 80 chars']
    },
    price: {
        type:Number,
        required: [true, 'Must provide a price'],
        trim: true,
        maxlength: 5 
    },
    published: {
        type:Boolean,
        default:true
    },
    category: {
        type:String,
        required: [true, 'Must provide a category'],
        trim:true,
        maxlength: [10, 'category cannot be more than 80 chars']
    },
})



module.exports = mongoose.model('Product', productsSchema)