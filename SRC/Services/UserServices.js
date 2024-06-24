const User = require('../models/User');
const crypto = require('crypto');

const getAllUsers = async () => {
    return await User.find({});
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const registerUser = async (UserData) => {
    UserData.Password = crypto.createHash('sha256').update(UserData.Password).digest('hex');
    const User = new User(productData);
    return await User.save();
};

const updateUser = async (id, UserData) => {
    return await User.findByIdAndUpdate(id, Userdata, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUser
};
