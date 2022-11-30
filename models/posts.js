import mongoose from 'mongoose';
const { Schema } = mongoose;

const postsSchema = new Schema(
	{
		poster: {
			type: Schema.Types.ObjectId,
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
			type: [Schema.Types.ObjectId],
			required: false,
		},
		reactions: {
			type: [Schema.Types.ObjectId],
			required: false,
		}
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
export default mongoose.models.posts || mongoose.model('posts', postsSchema);
