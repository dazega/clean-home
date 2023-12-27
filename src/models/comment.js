const { DataTypes, sequelize } = require('../../config/db');

const Comment = sequelize.define('Comment', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    }
}, {

});

module.exports = Comment;
