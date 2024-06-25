const userServices = require('../services/UserServices');

const getAllUsers = async (req, res) => {
        const users = await userServices.getAllUsers();
        res.json(users);
};

const getUserById = async (req, res) => {
        const user = await userServices.getUserById(req.params.id);
        res.json(user);
};

const updateUser = async (req, res) => {

        const user = await userServices.updateUser(req.params.id, req.body);
        return res.json(user);
};

const deleteUser = async (req, res) => {
        const user = await userServices.deleteUser(req.params.id);
        res.json(user);
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
