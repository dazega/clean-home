const { Address } = require('../../models');
const UserTypes = require('../../models/enums/UserTypes');

const getAddressById = async (addressId, user) => {
    const { id: userId, type: userType } = user;
    const address = await Address.findByPk(addressId);

    if (!address) {
        throw {
            code: 'AD001'
        };
    }

    if (userType === UserTypes.ADMIN) {
        return address;
    }

    if (address.userId !== userId) {
        throw {
            code: 'A002'
        };
    }

    return address;
};

module.exports = getAddressById;
