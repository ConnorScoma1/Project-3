const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InventorySchema = new Schema({

    
    productName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }
})

module.exports = Inventory = mongoose.model('inventory', InventorySchema);