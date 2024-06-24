const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: { type: String },
    UserName: { type: String } ,
    FamilyName: { type: String },
    PhoneNumber: { type: String },
    Password: { type: String},
});

module.exports = mongoose.model('Users', UserSchema);