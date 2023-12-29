const { User } = require('../../models');
const getUser = async (id) => {
    try {
        const user = await User.findByPk(id);

        return user;
    }
    catch {

    }
}

module.exports = getUser;