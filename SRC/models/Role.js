const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new mongoose.Schema({
    Name: { type: String , required: true } ,
    User: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
});

module.exports = mongoose.model('Roles', RoleSchema);