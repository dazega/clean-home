const getAddressById = require('./getAddressById');

const updateAddress = async (addressId, address, user) => {
    const addressInstance = await getAddressById(addressId, user);

    return addressInstance.update({ ...address });
};

module.exports = updateAddress;
