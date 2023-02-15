const express = require('express');

const {
	createPost,
	getPosts,
	updatePost,
	deletePost,
	replyToPost,
	reactToPost,
	unreactToPost,
} = require('../controllers/posts.controller.js');

const router = express.Router();

router.post('/create', createPost);
router.get('/getAll', getPosts);
router.put('/update/:userId', updatePost);
router.delete('/deleteById/:postId', deletePost);
router.post('/replyById/:postId', replyToPost);
router.post('/reactById/:postId', reactToPost);
router.post('/unreactById/:postId', unreactToPost)

module.exports = router;
