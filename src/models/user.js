const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        idCard:{
            type: String,
            unique:true,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('User', UserSchema);