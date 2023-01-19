const express = require('express');

const {
	createPost,
	getPosts,
	updatePost,
	deletePost,
	replyToPost,
	reactToPost,
} = require('../controllers/posts.controller.js');

const router = express.Router();

router.post('/create', createPost);
router.get('/getAll', getPosts);
router.put('/update', updatePost);
router.delete('/deleteByUser/:userId', deletePost);
router.post('/replyById/:postId', replyToPost);
router.post('/reactById/:postId', reactToPost);

module.exports = router;
