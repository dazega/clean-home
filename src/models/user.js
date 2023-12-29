const { DataTypes, sequelize } = require('../../config/db');
const UserTypes = require('./enums/UserTypes');
const userEnum = Object.keys(UserTypes).map(type => type);

const User = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    field: 'first_name',
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  secondLastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'second_last_name',
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  type: {
    defaultValue: UserTypes.USER,
    type: DataTypes.ENUM,
    values: userEnum,
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

User.prototype.getRaw = function () {
  return {
    id: this.id,
    firstName: this.firstName,
    lastName: this.lastName,
    secondLastName: this.secondLastName,
    email: this.email,
    phone: this.phone,
    type: this.type,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt, 
  }
};

module.exports = User;
