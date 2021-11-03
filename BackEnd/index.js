const express = require('express')
const app = express()
const port = 5050

app.get('/', (req, res) => {
    res.send('Hello, world from the Back-End!')
})

app.listen(port, () => {
    console.log(`REST-API listening on port ${port}`)
})