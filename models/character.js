const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: String,
    type: String,
    desc: String,
    leader_skill: String,
    leader_skill_desc: String,
    passive_skill: String,
    passive_skill_desc: String,
    ultimate_skill: String,
    ultimate_skill_desc: String,
    max_level: Number,
    init_str: Number,
    init_agi: Number,
    init_dex: Number,
    init_vit: Number,
    init_int: Number,
    init_luk: Number
}, {
    versionKey: false,
    timestamps: true,
    collection: 'characters'
})

module.exports = mongoose.model('Character', characterSchema)