const { Address } = require('../../models');
const createAddress = async (address, userId) => {
    const {
        street,
        neighborhood,
        zip,
        extNumber = '',
        intNumber,
        municipality,
        state,
    } = address;

    return Address.create({
        street,
        neighborhood,
        zip,
        extNumber,
        intNumber,
        municipality,
        state,
        userId,
    });
};

module.exports = createAddress;