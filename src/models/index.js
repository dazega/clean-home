const User = require('./user');
const Address = require('./address')

User.hasMany(Address, {
    foreignKey: 'user_id'
});
Address.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Address
};