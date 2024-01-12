const User = require('./user');
const Address = require('./address');
const Profile = require('./profile');

User.hasMany(Address, {
    foreignKey: 'user_id'
});
User.hasOne(Profile, {
    foreignKey: 'user_id'
});

Address.belongsTo(User, {
    foreignKey: 'user_id'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Address,
    Profile,
};