const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    UserName: { type: String } ,
    PhoneNumber: { type: String },
    Password: { type: String},
    Role: [{ type: Schema.Types.ObjectId, ref: 'Roles' }]
});

module.exports = mongoose.model('Users', UserSchema);

