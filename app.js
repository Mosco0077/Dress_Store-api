const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser');
const products = require('./routes/Products')

const connectDb = require('./config/db')
const port = 8000;

// Middleware


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products', products)

// app.use('/api/category', category)

app.use('/', (req, res) => {
    res.send(`Server Initiated on port ${port}`)
});

const start = async ()  => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running on ${port}`)) 

    } catch (error) {
        console.log(error)
    }
}

start()