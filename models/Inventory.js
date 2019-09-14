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
        type: INTEGER,
        default: Date.now
    }
})

module.exports = Inventory = mongoose.model('products', InventorySchema);