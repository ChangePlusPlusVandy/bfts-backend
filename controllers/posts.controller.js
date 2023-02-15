const mongoose = require("mongoose");
const Post = require('../models/posts.js');

const createPost = async (req, res) => {
	const post = new Post({
		poster: req.body.poster,
		title: req.body.title,
		text: req.body.text,
		replies: [],
		reactions: []
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

const updatePost = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.postId) };
		const targetPost = await Post.findOneAndUpdate(filter, { 
			title: req.body.title,
			text: req.body.text,
        });

        res.send(targetPost);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const deletePost = async (req, res) => {
	try {
        const filter = { _id: mongoose.Types.ObjectId(req.params.postId) };
    	const deleteResult = await Post.deleteOne(filter);
		res.send(deleteResult)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const replyToPost = async (req, res) => {
	const reply = {
		poster: req.body.poster,
		text: req.body.text,
	}

	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.postId) };
		const targetPost = await Post.findOneAndUpdate(filter, { 
			$push: { replies: reply} 
        });
        res.send(targetPost);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const reactToPost = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.postId) };
		const targetPost = await Post.findOneAndUpdate(filter, { 
			$addToSet: { reactions: mongoose.Types.ObjectId(req.body.poster)} 
        });
        res.send(targetPost);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const unreactToPost = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.postId) };
		const targetPost = await Post.findOneAndUpdate(filter, { 
			$pull: { reactions: mongoose.Types.ObjectId(req.body.poster)} 
        });
        res.send(targetPost);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = {
	createPost,
	getPosts,
	updatePost,
	deletePost,
	replyToPost,
	reactToPost,
	unreactToPost,
};
