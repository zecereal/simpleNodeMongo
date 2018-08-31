const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const HeroOwnerSchema = new Schema({
    character_id: {
        type: ObjectId,
        ref: 'Characters'
    },
    weapon_id: {
        type: ObjectId,
        ref: 'Inventories'
    },
    costume_id: {
        type: ObjectId,
        ref: 'Inventories'
    },
    artifact_id: {
        type: ObjectId,
        ref: 'Inventories'
    },
    level: Number,
    exp: Number,
    status_point: {
        str: Number,
        agi: Number,
        dex: Number,
        vit: Number,
        int: Number,
        luk: Number
    },
    status_point_left: Number,
    status_info: {
        hp: Number,
        mana: Number,
        damage: Number,
        movement_speed: Number,
        attack_speed: Number,
        accuracy_rate: Number,
        evade_chance: Number,
        defend: Number,
        block_rate: Number,
        critical_chance: Number,
        critical_damage: Number
    }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'heroes_owner'
})

module.exports = mongoose.model('HeroesOwner', HeroOwnerSchema)