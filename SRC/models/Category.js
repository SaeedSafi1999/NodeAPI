const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    Id: { type: Number, required: true },
    Name: { type: String, required: true },
});

module.exports = mongoose.model('Categories', CategorySchema);