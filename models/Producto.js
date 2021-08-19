const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    localization: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);