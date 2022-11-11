import mongoose from 'mongoose';
const { Schema } = mongoose;

const volunteersSchema = new mongoose.Schema(
	{
		name: {
			required: true,
			type: String,
		},
		location: {
			required: true,
			type: String,
		},
		phone: {
			required: true,
			type: Integer,
		},
		pronouns: {
			required: true,
			type: String,
		},
		picture: {
			required: false,
			type: String,
		},
		admintag: {
			required: false,
			type: Integer,
		},
	},
	{ timestamps: true }
);

// Prevent recompilation of model if it already exists
export default mongoose.models.Volunteers || mongoose.model('Volunteers', volunteersSchema);
