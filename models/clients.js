const mongoose = require('mongoose');
const { Schema } = mongoose;

const interactedSchema = new Schema({
	volunteer: {
		required: true,
		type: String,
	},
	time: {
		required: true,
		type: Number,
	},
});

const interacted = mongoose.model('interacted', interactedSchema);

const clientsSchema = new Schema({
	name: {
		required: true,
		type: String,
	},
	pronouns: {
		required: true,
		type: String,
	},
	gender: {
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
	shelter: {
		required: false,
		type: Boolean,
	},
	specialNeeds: {
		required: false,
		type: [String],
	},
	interacted: [
		{
			required: false,
			type: Schema.Types.ObjectId,
			ref: 'interacted',
		},
	],
});

// Prevent recompilation of model if it already exists
module.exports = Client = mongoose.model('clients', clientsSchema);
