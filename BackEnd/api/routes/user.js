const express = require('express');
const { MongoClient, Collection } = require('mongodb')
const router = express.Router();

const client = new MongoClient('mongodb://localhost:27017')
client.connect().then(() => {
    console.log("Successfully connected to MongoDB!")
}).catch(() => {
    console.log("Cannot connect to MongoDB")
})

const database = client.db("FluegelsFluege")
const users = database.collection("users")

router.post('/create', (req, res) => {
    const { first_name, last_name, username, email, password, phone, credit_card } = req.body;
    
    users.insertOne({
        first_name, last_name, username, email, password, phone, credit_card
    }).then(() => {
        res.sendStatus(201)
    }).catch(() => {
        res.sendStatus(500)
    })
})

router.post('/read', (req, res) => {
    users.findOne(req.body).then(v => {
        res.send(v)
    }).catch(() => {
        res.sendStatus(500)
    })
})

router.post('/update', (req, res) => {
    users.findOneAndUpdate(req.body.find, { $set: req.body.update }, () => {
        res.sendStatus(200)
    })
})

router.post('/delete', (req, res) => {
    users.findOneAndDelete(req.body).then(v => {
        res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router