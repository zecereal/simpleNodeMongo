const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const BlueprintSchema = new Schema({
    name: String,
    initail_item:{
        encyclopedia_id:{
            type: ObjectId,
            ref: 'items'
        }
    },
    item_needs:[{
        encyclopedia_id:{
            type: ObjectId,
            ref: 'items'
        }
    }],
    result_item:{
        encyclopedia_id:{
            type: ObjectId,
            ref: 'items'
        }
    }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'blueprints'
})

module.exports = mongoose.model('Blueprints', BlueprintSchema)