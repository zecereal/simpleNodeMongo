const express = require('express')
const bodyParser = require('body-parser')


const router = require('./routes/')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(3000, function() {
    console.log("listening on 3000")
})