const userServices = require('../services/UserServices');

const getAllUsers = async (req, res) => {
    try {
        const products = await userServices.getAllUsers();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userServices.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const registerUser = async (req, res) => {
    try {
        const user = await userServices.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userServices.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const delteUser = async (req, res) => {
    try {
        const user = await userServices.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    delteUser
};