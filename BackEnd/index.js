const jwt = require('jsonwebtoken')
const express = require('express')
const config = require('./config')
const app = express()
const port = config.port

app.use(express.json());

app.use((req, res, next) => {
    const token = req.header("x-auth-token")

    if (!token)
        return res.status(401).json({ msg: 'No token, authorisation denied!' })

    try {
        jwt.verify(token, config.jsonwebtoken, (err, decode) => {
            if (err) throw err;

            req.user = decode;
            next()
        })
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid!' })
    }
})

app.use("/api/user", require('./api/routes/user'))

app.get('/', (req, res) => {
    res.send('Hello, world from the Back-End!')
})

app.listen(port, () => {
    console.log(`REST-API listening on port ${port}`)
})