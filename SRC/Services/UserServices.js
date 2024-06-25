const User = require('../models/User');
const JWT =require('../Services/jwtService');
const crypto = require('crypto');

const getAllUsers =  () => {
    return  User.find({});
};

const getUserById =  (id) => {
    return  User.findById(id);
};

const updateUser =  (id, UserData) => {
    return  User.findByIdAndUpdate(id, UserData, { new: true });
};

const deleteUser =  (id) => {
    return  User.findByIdAndDelete(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
