const mongoose = require('mongoose')

const jumpSchema = new mongoose.Schema({
    type: String,
    dz: String,
    altitude: Number,
    opening: Number,
    freefalltime: Number,
    date: Date
})

jumpSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = mongoose.model('Jump', jumpSchema)