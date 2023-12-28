const getUserByEmail = require('./getUserByEmail');
const { comparePassword, createJWT } = require('../../utils');

const userLogin = async (email, password) => {
    const user = await getUserByEmail(email, false);
    const isValidPassword = await comparePassword(password, user?.password || '');

    if (!isValidPassword) {
        const error = {
            code: 'U003',
        };

        throw error;
    }

    return createJWT(user);

};

module.exports = userLogin;
