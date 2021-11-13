const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const express = require('express');
const router = express.Router();

const users = database.collection("users")

var unless = function (middleware, ...paths) {
    return function (req, res, next) {
        const pathCheck = paths.some(path => path === req.path);
        pathCheck ? next() : middleware(req, res, next);
    };
};

router.use(unless(auth, '/login', '/register'))

router.post('/login', (req, res) => {
    const { username, password } = req.body

    users.findOne({ username, password }).then(v => {
        if (!v) res.status(400).send("Unable to login")
        else res.send(jwt.sign({
            first_name: v.first_name,
            last_name: v.last_name,
            username: v.username,
            email: v.email
        }, config.jsonwebtoken))
    })
})

router.post('/register', (req, res) => {
    const { first_name, last_name, username, email, password, phone, credit_card } = req.body;

    users.insertOne({
        first_name, last_name, username, email, password, phone, credit_card
    }).then(() => {
        res.status(201).send(jwt.sign({ first_name, last_name, username, email }, config.jsonwebtoken))
    }).catch(() => {
        res.sendStatus(500)
    })
})

function auth(req, res, next) {
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
}

module.exports = router