const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const ShopSchema = new Schema({
    shop_types: [{
        type: 'general',
        item_list: [{
                type: ObjectId,
                ref: 'items'
            }
        ],
        cost: Number
    },{
        type: 'lucky_rootbox',
        item_list: [{
                type: ObjectId,
                ref: 'items'
            }
        ],
        cost: Number
    },{
        type: 'equipements',
        item_list: [{
                type: ObjectId,
                ref: 'items'
            }
        ],
        cost: Number
    },{
        type: 'materials',
        item_list: [{
                type: ObjectId,
                ref: 'items'
            }
        ],
        cost: Number
    }]
}, {
    versionKey: false,
    timestamps: true,
    collection: 'shops'
})

module.exports = mongoose.model('Shops', ShopSchema)