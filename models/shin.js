const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zecereal')

const Schema = mongoose.Schema

const ShinSchema = new Schema({
    name: String
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model('Shin', ShinSchema)