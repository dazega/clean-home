const Comment = require('../../models/comment');
const updateComment = async (id, email, description) => {
    const comment = await Comment.findByPk(id);

    comment?.update({ email, description });

    return comment;
};

module.exports = updateComment;
