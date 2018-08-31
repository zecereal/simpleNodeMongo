const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const MissionSchema = new Schema({
    name: String,
    mission_type:[{
        type:'daily'
    },{
        type:'weekly'
    },{
        type:'event'
    }],
    mission_desc: String,
    mission_condition: Number,
    reward_money: Number,
    reward_crystal: Number,
    reward_item: {
        type: ObjectId,
        ref: 'items'
    },
    reward_item_quantity: Number
}, {
    versionKey: false,
    timestamps: true,
    collection: 'missions'
})

module.exports = mongoose.model('Missions', MissionSchema)