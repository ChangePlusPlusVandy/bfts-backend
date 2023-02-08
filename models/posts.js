const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

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
		isReply: {
			type: Boolean,
			required: true,
		},
		replies: {
			type: String,
			required: false,
		},
		reactions: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
module.exports = Message = mongoose.model('posts', postsSchema);
