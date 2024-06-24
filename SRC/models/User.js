const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    UserName: { type: String, required: true },
    FamilyName: { type: Number, required: true },
    PhoneNumber: { type: Number, required: true },

});

module.exports = mongoose.model('Users', productSchema);