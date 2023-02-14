const mongoose = require('mongoose');

const reactSchema = new mongoose.Schema({
	poster: {
		type: String,
		required: true,
	},
	react: {
		type: Number,
		required: false,
	},
});

const repliesSchema = new mongoose.Schema({
	poster: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
	reactions: {
		type: [reactSchema],
		required: false,
	},
});

const postsSchema = new mongoose.Schema(
	{
		poster: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		text: {
			type: String,
			required: true,
		},
		replies: {
			type: [repliesSchema],
			required: false,
		},
		reactions: {
			type: [reactSchema],
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
module.exports = Message = mongoose.model('posts', postsSchema);
