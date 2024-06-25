const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: { type: String } ,
    PhoneNumber: { type: String },
    Password: { type: String},
});

module.exports = mongoose.model('Users', UserSchema);

