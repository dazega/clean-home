const User = require('../../models/user');

const getUserByEmail = async (email, throwError = true) => {
    const user = await User.findOne({ where: { email } });

    if (throwError) {
        if (!user) {
            const error = {
                code: 'U002'
            };
    
            throw error;
        }
    }

    return user;
}

module.exports = getUserByEmail;