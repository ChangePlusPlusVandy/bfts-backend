const mongoose = require('mongoose');
const { Schema } = mongoose;

const resourceSchema = new Schema(
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
			type: Number,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Resource = mongoose.model('Resource', resourceSchema);
