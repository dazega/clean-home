const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS || require('../../config/config.json').saltRounds;

const cryptPassword = async (password) => {
    return bcrypt.hash(password, saltRounds);
};

module.exports = cryptPassword;
