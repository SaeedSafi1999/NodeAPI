const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Description:  { type: String, required: true },
    CategoryId:  { type: Number, required: true },
    Category:Object

});

module.exports = mongoose.model('Products', productSchema);