const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const profileSchema = new Schema({
    name: String,
    level: Number,
    max_stamina: Number,
    recent_stamina: Number,
    money: Number,
    crystal: Number,
    hero_owner: [{
        type: ObjectId,
        ref: 'heroes_owner'
    }],
    storage: [{
        type: ObjectId,
        ref: 'inventories'
    }],
    mission_perform: [{
        mission_id: {
            type: ObjectId,
            ref: 'missions'
        },
        mission_process: Number,
        status: String
    }],
    archievement_perform: [{
        archievement_id: {
            type: ObjectId,
            ref: 'archievements'
        },
        archievement_process: Number,
        status: String
    }],
}, {
    versionKey: false,
    timestamps: true,
    collection: 'profiles'
})

module.exports = mongoose.model('Profiles', profileSchema)