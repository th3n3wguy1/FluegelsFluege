const express = require('express');
const { check, validationResult, matchedData } = require('express-validator');
const { authRequired, adminRequired } = require('../auth')

const router = express.Router();
const flights = database.collection("flights")

router.post('/create', authRequired, adminRequired, [
    check('origin').notEmpty().isString().withMessage('Invalid origin'),
    check('destination').notEmpty().isString().withMessage('Invalid Destination'),
    check('time').notEmpty().isISO8601().withMessage('Invalid time'),
    check('seats').notEmpty().isInt().withMessage('Invalid seat number')
], (req, res) => {
    const valid = validationResult(req)
    if (!valid.isEmpty()) {
        res.status(400).send(valid.errors[0].msg)
    } else {
        flights.insertOne({ ...matchedData(req), passengers: 0 }).then(() => {
            res.sendStatus(201)
        }).catch(() => {
            res.sendStatus(500)
        })
    }
})

router.post('/read', authRequired, [
    check('origin').optional().isString().withMessage('Invalid origin'),
    check('destination').optional().isString().withMessage('Invalid Destination'),
    check('time').optional().isISO8601().withMessage('Invalid time'),
    check('seats').optional().isInt().withMessage('Invalid seat number'),
    check('passengers').optional().isInt().withMessage('Invalid passanger number')
], (req, res) => {
    const valid = validationResult(req)
    if (!valid.isEmpty()) {
        res.status(400).send(valid.errors[0].msg)
    } else {
        flights.findOne(matchedData(req)).then(v => {
            if (v) res.send(v)
            else res.sendStatus(404)
        }).catch(() => {
            res.sendStatus(500)
        })
    }
})

// TODO sanatize
router.post('/update', authRequired, adminRequired, (req, res) => {
    flights.findOneAndUpdate(req.body.find, { $set: req.body.update }, () => {
        res.sendStatus(200)
    })
})

router.post('/delete', authRequired, adminRequired, [
    check('origin').optional().isString().withMessage('Invalid origin'),
    check('destination').optional().isString().withMessage('Invalid Destination'),
    check('time').optional().isISO8601().withMessage('Invalid time'),
    check('seats').optional().isInt().withMessage('Invalid seat number'),
    check('passengers').optional().isInt().withMessage('Invalid passanger number')
], (req, res) => {
    flights.findOneAndDelete(matchedData(req)).then(v => {
        if (!v) res.sendStatus(404)
        else res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router