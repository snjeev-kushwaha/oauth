const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    desc: {
        type: String
    },
    longDesc: {
        type: String
    }
})

module.exports = mongoose.model('Home', homeSchema)