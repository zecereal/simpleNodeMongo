const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const InventorySchema = new Schema({
    weapon_lists: [{
        weapon_id: {
            type: ObjectId,
            ref: 'items',
        },
        weapon_level: Number,
        weapon_exp: Number
    }],
    costume_lists: [{
        costume_id: {
            type: ObjectId,
            ref: 'items'
        },
        costume_level: Number,
        costume_exp: Number
    }],
    artifact_lists: [{
        artifact_id: {
            type: ObjectId,
            ref: 'items'
        },
        artifact_level: Number,
        artifact_exp: Number
    }],
    material_lists: [{
        material_id: {
            type: ObjectId,
            ref: 'items'
        },
        quantity: Number
    }]
}, {
    versionKey: false,
    timestamps: true,
    collection: 'inventories'
})

module.exports = mongoose.model('Inventories', InventorySchema)