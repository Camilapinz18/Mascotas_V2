const mongoose = require('mongoose');

const BreedSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)
module.exports = mongoose.model('Breed', BreedSchema);