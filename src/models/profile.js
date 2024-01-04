const { sequelize, DataTypes } = require('../../config/db');

const Profile = sequelize.define('Profile', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    aboutYou: {
        allowNull: false,
        field: 'about_you',
        type: DataTypes.STRING,
    },
    ratingAvg: {
        allowNull: false,
        field: 'rating_avg',
        type: DataTypes.INTEGER
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

});

Profile.prototype.getRaw = function () {
    return {
        id: this.id,
        name: this.name,
        aboutYou: this.aboutYou,
        ratingAvg: this.ratingAvg,
    }
}

module.exports = Profile;