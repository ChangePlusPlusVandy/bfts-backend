//const mongoose = require("mongoose");

const Message = require('../models/messages.js');

const createMessage = (req, res) => {
	res.send('Add a Message');
};

const getMessage = (req, res) => {
	res.send('Get All Messages from user ' + req.params.userId);
};

const updateMessage = (req, res) => {
	res.send('Update Message ' + req.params.messageId);
};

const deleteMessage = (req, res) => {
	res.send('Delete Message ' + req.params.messageId);
};

module.exports = {
	createMessage,
	getMessage,
	updateMessage,
	deleteMessage,
};
