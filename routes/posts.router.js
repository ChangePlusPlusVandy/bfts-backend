const express = require('express');

const {
	createPost,
	getPosts,
	updatePost,
	deletePost,
	replyToPost,
	unreplyToPost,
	reactToPost,
	unreactToPost,
} = require('../controllers/posts.controller.js');

const router = express.Router();

router.post('/create', createPost);
router.get('/getAll', getPosts);
router.put('/update/:postId', updatePost);
router.delete('/deleteById/:postId', deletePost);
router.post('/replyById/:postId', replyToPost);
router.delete('/unreplyById/:postId', unreplyToPost);
router.post('/reactById/:postId', reactToPost);
router.delete('/unreactById/:postId', unreactToPost);

module.exports = router;
