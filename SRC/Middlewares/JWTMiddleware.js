const jwt = require('jsonwebtoken');
const config = require('../Config/Config');
const  JWT_SECRET  = config.SecretKey;

const authenticateToken = (requiredRole) => (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token not provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }
        const { Role } = decodedToken;
        console.log(Role);

        if (!Role || !Role.includes(requiredRole)) {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }

        req.user = decodedToken;
        next();
    });
};

module.exports = authenticateToken;
