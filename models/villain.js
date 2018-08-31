const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema

const VillainSchema = new Schema({
    name: String,
    type: String,
    desc: String,
    init_hp: Number,
    init_damage: Number,
    init_defend: Number,
    init_speed: Number
}, {
    versionKey: false,
    timestamps: true,
    collection: 'villain'
})

module.exports = mongoose.model('Villain', VillainSchema)