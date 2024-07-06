const AuthService = require('../services/AuthService');

//Login
const login = async (req, res) => {
    const { PhoneNumber, Password } = req.body;
        // Authenticate user
        const result = await AuthService.authenticateUser(PhoneNumber, Password);
        res.json(result);
};


//Register
const Register = async (req,res) =>{
        const user = await AuthService.registerUser(req.body);
        res.json(user);
};

//export
module.exports = {
    login,
    Register
};
