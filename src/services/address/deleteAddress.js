const getAddressById = require("./getAddressById")

const deleteAddress = async (addressId, user) => {
    const address = await getAddressById(addressId, user);

    return address.destroy();
}

module.exports = deleteAddress;
