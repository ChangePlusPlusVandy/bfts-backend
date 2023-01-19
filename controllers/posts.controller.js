//const mongoose = require("mongoose");

const Post = require('../models/posts.js');

const createPost = (req, res) => {
	res.send('Create a Post');
};

const getPosts = (req, res) => {
	res.send('Get all posts');
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
