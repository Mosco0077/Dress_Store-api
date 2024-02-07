const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Must provide a name'],
        trim:true,
        maxlength: [10, 'category cannot be more than 80 chars']
    },
})

module.exports = mongoose.model('Category', categorySchema) 