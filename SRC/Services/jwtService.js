const jwt = require('jsonwebtoken');
const config = require('../Config/Config');
const bcrypt = require('bcryptjs');
const  JWT_SECRET  = config.SecretKey;
const ExpireIn = config.ExpireIn;

module.exports = {
    generateToken: (payload) => {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: ExpireIn });
    },

    verifyToken: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (err) {
            return null; // Token is invalid
        }
    },

    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        try{
            return bcrypt.hash(password, salt);
        }
        catch (error){
            throw new Error(error.message);
        }
    },

    comparePasswords: async (inputPassword, hashedPassword) => {
        return bcrypt.compare(inputPassword, hashedPassword);
    }
};
