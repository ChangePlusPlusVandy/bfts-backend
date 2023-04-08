const mongoose = require('mongoose');
const Client = require('../models/clients.js');


const getAllClient = async (req, res) => {
	try {
		const data = await Client.find({});
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const createClient = async (req, res) => {
	const client = new Client({
		name: req.body.name,
		pronouns: req.body.pronouns,
		gender: req.body.gender,
		birthday: req.body.birthday,
		location: req.body.location,
		livingSituation: req.body.livingSituation,
		background: req.body.background,
		resourceTags: req.body.resourceTags,
		shelter: req.body.shelter,
		specialNeeds: req.body.specialNeeds,
		interacted: req.body.interacted,
	});
	try {
		const data = await client.save();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteClient = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.body.clientId) };
		const targetPost = await Client.deleteOne(filter);
		res.send(targetPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getClient = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.body.clientId) };
		const data = await Client.findOne(filter);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateClient = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.body.clientId) };
		const targetPost = await Client.findOneAndUpdate(filter, {
			location: req.body.location,
			shelter: req.body.shelter,
			livingSituation: req.body.livingSituation,
			background: req.body.background,
			specialNeeds: req.body.specialNeeds,
			interacted: req.body.interacted,
		});
		res.send(targetPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createClient,
	deleteClient,
	getClient,
	updateClient,
	getAllClient
};
