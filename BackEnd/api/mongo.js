const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')
client.connect().then(() => {
    console.log("Successfully connected to MongoDB!")
}).catch(() => {
    console.log("Cannot connect to MongoDB")
})

const database = client.db("FluegelsFluege")
module.exports = database