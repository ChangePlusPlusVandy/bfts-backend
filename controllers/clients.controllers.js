const Client = require('../models/clients');

const createClient = (req, res) => {
	res.send('Create Client');
};

const deleteClient = (req, res) => {
	res.send('Delete Client');
};

const getClient = (req, res) => {
	res.send('Get Client');
};

const updateClient = (req, res) => {
	res.send('Update Client');
};

module.exports = {
	createClient,
	deleteClient,
	getClient,
	updateClient,
};
