const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Inventory = new Schema(
  {
    productName: { type: String, required: true },
    productType: { type: String, required: true, unique: true },
    description: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
 
  });

module.exports = mongoose.model('inventory', Inventory)