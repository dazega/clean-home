const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || require('../../config/config.json').jwtSecret;

const auth = (req, res, next) => {
    const token = req.headers['authorization']?.replace('bearer ', '');

    if (!token) {
        throw {
            code: 'A002'
        }
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);

        req.user = decoded;
        next();
    } catch (err) {
        console.log('Error en middleware auth', err);
        throw {
            code: 'A001'
        }
    }
}

module.exports = auth;
