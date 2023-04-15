const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const repliesSchema = new mongoose.Schema(
	{
		poster: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const postSchema = new mongoose.Schema(
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
		name: {
			type: String,
			required: true,
		},
		replies: {
			type: [repliesSchema],
			required: false,
		},
		reactions: {
			type: [ObjectId],
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
module.exports = Post = mongoose.model('posts', postSchema);
