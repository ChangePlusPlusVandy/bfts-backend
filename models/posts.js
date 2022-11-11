import mongoose from 'mongoose';
const { Schema } = mongoose;

const postsSchema = new Schema(
	{
		poster: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		replies: {
			type: [Schema.Types.ObjectId],
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
export default mongoose.models.Posts || mongoose.model('Posts', postsSchema);
