const Client = require('../models/clients');

const createClient = async (req, res) => {
	res.send('Create Client');
	const client = new Client({
		name: req.body.name,
		pronouns: req.body.pronouns,
		birthday: req.body.birthday,
		location: req.body.location,
		livingSituation: req.body.livingSituation,
		background: req.body.background,
		resourceTags: req.body.resourceTags,
	});
	try {
		const data = await client.save();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteClient = (req, res) => {
	res.send('Delete Client');
};

const getClient = async (req, res) => {
	res.send('Get Client');
	try {
		const data = await Client.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
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
