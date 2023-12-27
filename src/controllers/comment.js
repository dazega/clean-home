const { Router } = require('express');
const commentServices = require('../services/comment');
const router = Router();

router.get('/', async (req, res) => {
    const comments = await commentServices.getComments();

    res.status(200).json({ comments });
});

router.post('/', async (req, res) => {
    const { email, description } = req.body;
    const newComment = await commentServices.createComment(email, description);

    if (!newComment) {
        return res.status(500).json({ message: 'Error al crear el comentario' });
    }

    return res.status(201).json({ comment: newComment });
});

router.delete('/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const comment = await commentServices.deleteComment(commentId);

    if (!comment) {
        return res.status(404).json({ message: 'Comment no encontrado' });
    }

    return res.status(200).json({ message: 'Comentario eliminado' })
});

router.put('/:commentId', async (req, res) => {
    const { email, description } = req.body;
    const { commentId } = req.params;
    const commentUpdated = await commentServices.updateComment(commentId, email, description);

    if (!commentUpdated) {
        return res.status(404).json({ message: 'Comment no encontrado' });
    }

    return res.status(200).json({ comment: commentUpdated });
});

module.exports = router;
