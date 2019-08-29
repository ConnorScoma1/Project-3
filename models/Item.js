const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// Add More Fields When Front-End is Done

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)