const mongoose = require('mongoose');
const Message = require('../models/messages.js');

const createMessage = async (req, res) => {
	const message = new Message({
		message: req.body.message,
		sender: mongoose.Types.ObjectId(req.body.sender),
	});

	try {
		const dataToSave = await message.save();
		res.status(200).json(dataToSave);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getMessage = async (req, res) => {
	try {
		const post = await Message.find({ sender: req.params.userId });
		res.json(post);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateMessage = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.messageId) };
		const targetPost = await Message.findOneAndUpdate(filter, {
			message: req.body.message,
		});
		res.send(targetPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteMessage = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.messageId) };
		const targetPost = await Message.deleteOne(filter);
		res.send(targetPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createMessage,
	getMessage,
	updateMessage,
	deleteMessage,
};
