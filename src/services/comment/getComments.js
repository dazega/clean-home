const Comment = require('../../models/comment');
const getComments = async () => {
    return Comment.findAll();
};

module.exports = getComments;
