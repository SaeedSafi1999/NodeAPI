const User = require('../models/User');
const JWT =require('../Services/jwtService');
const crypto = require('crypto');
const ServiceResult = require('../Utils/ServiceResult');

const getAllUsers = async () => {
    const operation = new ServiceResult();
    const users = await  User.find({});
    return operation.Ok([users]);

};

const getUserById = async (id) => {
    const operation = new ServiceResult();
    const user = await  User.findById(id);
    if(user === null)
        return operation.NotFound("user not found");
    return operation.Ok(user);
};

const updateUser = async (id, UserData) => {
    const operation = new ServiceResult();
    const updatedUser = await User.findByIdAndUpdate(id, UserData, { new: true });
    if(updatedUser === null)
        return operation.NotFound("User not found");
    return operation.Ok(updatedUser);
};

const deleteUser = (id) => {
    const operation = new ServiceResult();
    const user =   User.findByIdAndDelete(id);
    if(user === null)
        return operation.NotFound("User not found");
    return operation.Ok(null);

};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
