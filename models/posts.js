const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
	{
		poster: {
			type: ObjectId,
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
		isReply: {
			type: Boolean,
			required: true,
		},
		replies: {
			type: [ObjectId],
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
module.exports = Post = mongoose.model('posts', postsSchema);
