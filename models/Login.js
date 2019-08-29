const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// Add More Fields When Front-End is Done

const LoginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Login = mongoose.model('login', LoginSchema)