const Resource = require('../models/resources.js');

const createResource = async (req, res) => {
	const data = new Resource({
		title: req.body.title,
		category: req.body.category,
		website: req.body.website,
		contactName: req.body.contactName,
		contactNumber: req.body.contactNumber,
	});

	try {
		const dataToSave = await data.save();
		res.status(200).json(dataToSave);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteResource = async (req, res) => {
	try {
		const data = await Resource.findByIdAndDelete(req.body.id);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getResource = async (req, res) => {
	try {
		const data = await Resource.findById(req.query.id);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateResource = async (req, res) => {
	try {
		const data = await Resource.findByIdAndUpdate(req.body.id, req.body);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createResource,
	deleteResource,
	getResource,
	updateResource,
};
