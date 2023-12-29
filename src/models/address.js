const { DataTypes, sequelize } = require('../../config/db');
const User = require("./user");

const Address = sequelize.define('Address', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    street: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    neighborhood: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    zip: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    extNumber: {
        allowNull: false,
        field: 'ext_number',
        type: DataTypes.STRING,
    },
    intNumber: {
        allowNull: true,
        field: 'int_number',
        type: DataTypes.STRING,
    },
    municipality: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    state: {
        allowNull: false,
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
}, {
    // Other model options go here
});

module.exports = Address;
