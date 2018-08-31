const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const ArchievementSchema = new Schema({
    name: String,
    archievement_desc: String,
    archievement_condition: Number,
    reward_money: Number,
    reward_crystal: Number,
    reward_items: {
        type: ObjectId,
        ref: 'items'
    },
    reward_item_quantity: Number
}, {
    versionKey: false,
    timestamps: true,
    collection: 'archievements'
})

module.exports = mongoose.model('Archievements', ArchievementSchema)