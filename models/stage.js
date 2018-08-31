const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const StageSchema = new Schema({
    name: String,
    stage_desc:String,
    villain:[{
        villian_id:{
            type:ObjectId,
            ref:'villains'
        },
        difficult: Number,
        item_reward:{
            type: ObjectId,
            ref:'items'
        },
        money_reward:Number,
        exp_reward:Number,

    }]
}, {
    versionKey: false,
    timestamps: true,
    collection: 'stages'
})

module.exports = mongoose.model('Stages', StageSchema)