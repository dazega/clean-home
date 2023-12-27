const Comment = require('../../models/comment');
const createComment = async (email, description) => {
    try {
        return Comment.create({ email, description });
    } catch (error) {
        console.log(error);
        return null
    }
};

module.exports = createComment;
