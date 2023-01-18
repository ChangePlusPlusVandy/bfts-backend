//const mongoose = require("mongoose");

const Message = require('../models/messages.js');

const createMessage = (req, res) => {
	res.send('Create Message');
};

const deleteMessage = (req, res) => {
	res.send('Delete Message');
};

const getMessage = (req, res) => {
	res.send('Get Message');
};

module.exports = {
	createMessage,
	deleteMessage,
	getMessage,
};
