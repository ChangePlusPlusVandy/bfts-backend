import mongoose from 'mongoose';
const { Schema } = mongoose;

const volunteerSchema = new mongoose.Schema(
	{
		name: {
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
			type: Date,
		},
		location: {
			required: true,
			type: String,
		},
		phone: {
			required: true,
			type: Integer,
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
			type: Date,
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

module.exports = mongoose.model('Volunteer', volunteerSchema);
