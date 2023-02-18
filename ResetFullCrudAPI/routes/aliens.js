const express = require('express')
const User1 = require('../models/User1')
const User1 = require('../models/User1')
const User1 = require('../models/User1')
const router = express.Router()
const User1 = require('../models/User1')


router.get('/', async(req, res) => {
    try {
        const aliens = await User1.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const User1 = await User1.findById(req.params.id)
        res.json(User1)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async(req, res) => {
    const User1 = new User1({
        name: req.body.name,
        tech: req.body.Age,
        sub: req.body.Phone_Number,
        sub: req.body.location
    })

    try {
        const a1 = await User1.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const User1 = await User1.findById(req.params.id)
        User1.sub = req.body.name
        const a1 = await User1.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router