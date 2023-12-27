const Comment = require('../../models/comment');
const deleteComments = async (id) => {
    const comment = await Comment.findByPk(id);

    comment?.destroy();

    return comment;
};

module.exports = deleteComments;
