const express = require('express')
const router = express.Router()
const path = require('path')

const Shin = require('../models/shin')

router.use(function(req, res, next) {
    console.log('oh baby Something just like this ~')
    next()
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'))
})

router.post('/quotes', (req, res) => {
    console.log(req.body)
})


router.get('/', function(req, res) {
    res.json({ message: 'yeahhh our api is work !!' })
})

router.post('/shin', function(req, res) {
    const shin = new Shin()
    shin.name = req.body.name

    shin.save(function(err) {
        if (err)
            res.send(err)

        res.json({ message: "shin created!!" })
    })
})

router.get('/shin', async(req, res) => {
    // Shin.find(function(err, shin) {
    //     if (err)
    //         res.send(err)

    //     res.json(shin)
    // })

    // ASYNC
    const shin = await Shin.find().catch(err => err.message)
    res.json(shin)
})

router.get('/shin/:shin_id', function(req, res) {
    Shin.findById(req.params.shin_id, function(err, shin) {
        if (err)
            res.send(err)

        res.json(shin)
    })

    // ASYNC

})

router.put('/shin/:shin_id', async(req, res) => {
    // Shin.findById(req.params.shin_id, function(err, shin) {
    //     if (err)
    //         res.send(err)

    //     shin.name = req.body.name

    //     shin.save(function(err) {
    //         if (err)
    //             res.send(err)

    //         res.json({ message: 'shin updated!' })
    //     })
    // })

    // ES6

    const shin = await Shin.findById(req.params.shin_id).catch(err => err.message)

    shin.name = req.body.name

    shin.save().catch(err => err.message)

    res.json({ message: 'shin updated!' })
})

router.delete('/shin/:shin_id', function(req, res) {
    Shin.remove({
        _id: req.params.shin_id
    }, function(err, shin) {
        if (err)
            res.send(err)

        res.json({ message: 'Successfully Deleted! ' })
    })
})

module.exports = router