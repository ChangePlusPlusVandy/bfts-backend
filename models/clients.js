const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientsSchema = new Schema(
	{
		name: {
			required: true,
			type: String,
		},
		pronouns: {
			required: true,
			type: String,
		},
		birthday: {
			required: true,
			type: Number,
		},
		location: {
			required: true,
			type: String,
		},
		livingSituation: {
			required: true,
			type: String,
		},
		background: {
			required: true,
			type: String,
		},
		resourceTags: {
			required: false,
			type: [Schema.Types.ObjectId],
		},
	},
	{
		timestamps: true,
	}
);

// Prevent recompilation of model if it already exists
module.exports = Message = mongoose.model('clients', clientsSchema);
