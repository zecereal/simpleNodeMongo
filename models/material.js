const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema

const MaterialSchema = new Schema({
    name: String,
    rarity_rate: Number,
    type: String,
    desc: String,
    price: Number
}, {
    versionKey: false,
    timestamps: true,
    collection: 'materials'
})

module.exports = mongoose.model('Materials', MaterialSchema)