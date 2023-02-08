//const mongoose = require("mongoose");

const Post = require('../models/posts.js');

const createPost = async (req, res) => {
	const post = new Post({
		poster: req.body.poster,
		title: req.body.title,
		text: req.body.text,
		isReply: req.body.isReply,
		replies: req.body.replies,
		reactions: req.body.reactions
	});

	try {
		const dataToSave = await post.save();
		res.status(200).json(dataToSave);
	} catch (error) {
        res.status(500).json({message: error.message})
    }
};

const getPosts = async (req, res) => {
	try{
        const post = await Post.find();
        res.json(post)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

const updatePost = (req, res) => {
	res.send('Update post by Id');
};

const deletePost = (req, res) => {
	res.send('Delete post by Id ' + req.params.userId);
};

const replyToPost = (req, res) => {
	res.send('Reply to post by Id ' + req.params.postId);
};

const reactToPost = (req, res) => {
	res.send('React to post by Id ' + req.params.postId);
};

module.exports = {
	createPost,
	getPosts,
	updatePost,
	deletePost,
	replyToPost,
	reactToPost,
};
