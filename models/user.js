const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/world_hero')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    facebookId: {
        type: String
    },
    profile: {
        type: ObjectId,
        ref: 'user_infomations'
    }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'users'
})

module.exports = mongoose.model('Users', UserSchema)