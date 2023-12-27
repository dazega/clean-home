const UserTypes = require('../../models/enums/UserTypes');
const User = require('../../models/user');
const cryptPassword = require('../../utils/cryptPassword');

const createUser = async (user) => {
    const {
        firstName,
        lastName,
        secondLastName = '',
        email,
        password,
        phone,
        type = UserTypes.USER,
    } = user;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
        const error = {
            name: 'U001',
            message: 'Usuario existente'
        };

        throw error;
    }

    const hash = await cryptPassword(password);

    return User.create({
        firstName,
        lastName,
        secondLastName,
        email,
        phone,
        type,
        password: hash
    });
}

module.exports = createUser;
