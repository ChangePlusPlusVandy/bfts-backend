const mongoose = require('mongoose');
const { Schema } = mongoose;

const volunteerSchema = new mongoose.Schema(
	{
		name: {
			required: true,
			type: String,
		},
		firebaseid: {
			required: true,
			type: String,
		},
		pronouns: {
			required: true,
			type: String,
		},
		race: {
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
		phone: {
			required: true,
			type: Number,
		},
		email: {
			required: true,
			type: String,
		},
		vaccination: {
			required: true,
			type: Boolean,
		},
		startdate: {
			required: true,
			type: Number,
		},
		startlocation: {
			required: true,
			type: String,
		},
		socialmedia: {
			required: false,
			type: String,
		},
		background: {
			required: true,
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = Volunteer = mongoose.model('volunteers', volunteerSchema);