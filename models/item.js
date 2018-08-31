const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const ItemSchema = new Schema({

    name: String,
    rarity_rate: Number,
    type: String,
    desc: String,
    price: Number,
    max_level: Number,
    item_types: [{
        type: 'weapon',
        weapon_skill: String,
        weapon_skill_desc: String,
        damage: Number,
        firerate: Number
    }, {
        type: 'costume',
        costume_skill: String,
        costume_skill_desc: String,
        defend: Number,
        hp: Number,
    }, {
        type: 'artifact',
        artifact_skill: String,
        artifact_skill_desc: String
    },{
        type: 'material'
    }]
}, {
    versionKey: false,
    timestamps: true,
    collection: 'items'
})

module.exports = mongoose.model('Items', ItemSchema)