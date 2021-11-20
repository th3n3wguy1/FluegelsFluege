const express = require('express');
const { check, validationResult, matchedData } = require('express-validator');
const { authRequired, adminRequired } = require('../auth')

const router = express.Router();
const users = database.collection("users")

router.post('/create', authRequired, adminRequired, [
    check('first_name').notEmpty().isAlpha().withMessage("Invalid firstname"),
    check('last_name').notEmpty().isAlpha().withMessage("Invalid lastname"),
    check('username').notEmpty().isString().withMessage("Invalid username"),
    check('email').notEmpty().isEmail().withMessage("Invalid email"),
    check('password').notEmpty().isString().withMessage("Invalid password"),
    check('phone').notEmpty().isMobilePhone().withMessage("Invalid phone"),
    check('credit_card').notEmpty().isCreditCard().withMessage("Invalid CC"),
    check('admin').notEmpty().isBoolean().withMessage("Invalid admin parameter")
], (req, res) => {
    const valid = validationResult(req)
    if (!valid.isEmpty()) {
        res.status(400).send(valid.errors[0].msg)
    } else {
        users.insertOne(matchedData(req)).then(() => {
            res.sendStatus(201)
        }).catch(() => {
            res.sendStatus(500)
        })
    }
})

router.post('/read', authRequired, adminRequired, [
    check('first_name').optional().isAlpha().withMessage("Invalid firstname"),
    check('last_name').optional().isAlpha().withMessage("Invalid lastname"),
    check('username').optional().isString().withMessage("Invalid username"),
    check('email').optional().isEmail().withMessage("Invalid email"),
    check('phone').optional().isMobilePhone().withMessage("Invalid phone"),
    check('credit_card').optional().isCreditCard().withMessage("Invalid CC"),
    check('admin').optional().isBoolean().withMessage("Invalid admin parameter")
], (req, res) => {
    const valid = validationResult(req)
    if (!valid.isEmpty()) {
        res.status(400).send(valid.errors[0].msg)
    } else {
        users.findOne(matchedData(req)).then(v => {
            if (v) res.send(v)
            else res.sendStatus(404)
        }).catch(() => {
            res.sendStatus(500)
        })
    }
})

// TODO sanatize
router.post('/update', authRequired, adminRequired, (req, res) => {
    users.findOneAndUpdate(req.body.find, { $set: req.body.update }, () => {
        res.sendStatus(200)
    })
})

router.post('/delete', authRequired, adminRequired, [
    check('first_name').optional().isAlpha().withMessage("Invalid firstname"),
    check('last_name').optional().isAlpha().withMessage("Invalid lastname"),
    check('username').optional().isString().withMessage("Invalid username"),
    check('email').optional().isEmail().withMessage("Invalid email"),
    check('phone').optional().isMobilePhone().withMessage("Invalid phone"),
    check('credit_card').optional().isCreditCard().withMessage("Invalid CC")
], (req, res) => {
    users.findOneAndDelete(req.body).then(v => {
        if (!v) res.sendStatus(404)
        else res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router