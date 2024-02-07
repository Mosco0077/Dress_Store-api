const mongoose = require('mongoose')


// const connectionString = 

const connectDb = (url) => {
     return mongoose.connect(url)

}

// .then(() => console.log('CONNECTED TO THE DB'))
// .catch((err) => console.log(err))






// const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = connectDb


// const uri = "mongodb+srv://fashion_user:<password>@cluster0.bq1ctss.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
