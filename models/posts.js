const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const repliesSchema = new mongoose.Schema({
	poster: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
});

const postsSchema = new mongoose.Schema(
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
module.exports = Message = mongoose.model('posts', postsSchema);
