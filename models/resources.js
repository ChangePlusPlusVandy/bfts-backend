import mongoose from 'mongoose';
const { Schema } = mongoose;

const resourcesSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		website: {
			type: String,
			required: true,
		},
		contactName: {
			type: String,
			required: false,
		},
		contactNumber: {
			type: Integer,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
export default mongoose.models.resources || mongoose.model('resources', resourcesSchema);
