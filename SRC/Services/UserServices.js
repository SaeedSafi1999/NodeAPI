const User = require('../models/User');
const JWT =require('../Services/jwtService');
const crypto = require('crypto');
const ServiceResult = require('../Utils/ServiceResult');

const getAllUsers = async () => {
    const operation = new ServiceResult();
    const users = await  User.find({});
    return operation.Ok([users]);

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
