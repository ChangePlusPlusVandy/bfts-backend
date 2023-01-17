const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const messagesSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: true,
		},
		sender: {
			type: ObjectId,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Message = mongoose.model("Message", messagesSchema);