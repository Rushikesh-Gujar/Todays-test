const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Boolean,
        required: true,
        default: false
    },
    phone_Number: {
        type: int,
        required: true,
        default: false
    }


})

module.exports = mongoose.model('Alien', alienSchema)