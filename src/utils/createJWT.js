const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || require('../../config/config.json').jwtSecret;

const createJWT = (user) => {
    const payload = {
        fullName: `${user.firstName} ${user.lastName} ${user.secondLastName}`,
        type: user.type,
        email: user.email,
        id: user.id
    };
    const options = {
        expiresIn: '2d'
    };

    return jwt.sign(payload, jwtSecret, options);
};

module.exports = createJWT;
