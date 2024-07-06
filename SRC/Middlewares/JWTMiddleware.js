const jwt = require('jsonwebtoken');
const config = require('../Config/Config')
const { JWT_SECRET } = config.SecretKey;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token not provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'UnAuthorized access' });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
