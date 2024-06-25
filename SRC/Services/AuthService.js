const jwtService = require('./jwtService');
const User = require('../models/User');
const JWT = require("./jwtService");
const ServiceResult = require("../Utils/ServiceResult");


const authenticateUser = async (PhoneNumber, Password) => {
        const operation = new ServiceResult();
    try {
        // Find user by phoneNumber
        const user = await User.findOne({PhoneNumber: PhoneNumber});
        if (user === null) {
            return operation.NotFound("user not found");
        }

        // Compare passwords
        const isMatch = await jwtService.comparePasswords(Password, user.Password);
        if (!isMatch) {
            return operation.Fail("Invalid PhoneNumber or Password");
        }

        // Generate JWT token
        const token = jwtService.generateToken({ id: user._id, PhoneNumber: user.PhoneNumber });

        return operation.Ok({ token, user: { id: user._id, UserName: user.UserName, PhoneNumber: user.PhoneNumber } });

    } catch (error) {
        return operation.Fail(error.message);
    }
};

const registerUser = async (UserData) => {
    const operation = new ServiceResult();
    UserData.Password = await JWT.hashPassword(UserData.Password);
    const user = new User(UserData);
    try {
        const userExist = await User.findOne({PhoneNumber: UserData.PhoneNumber});
        if(userExist != null)
            return operation.Fail("User already exist")
        const result = await user.save();
        return operation.Ok(user);
    } catch (error) {
        return operation.Fail(error.message);
    }
};

module.exports = {
    authenticateUser,
    registerUser
};
