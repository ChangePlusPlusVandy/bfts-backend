const Resource = require('../models/resources.js');

const createResource = (req, res) => {
	res.send('Create Resource');
};

const deleteResource = (req, res) => {
	res.send('Delete Resource');
};

const getResource = (req, res) => {
	res.send('Get Resource');
};

const updateResource = (req, res) => {
    res.send('Update Resource');
};

module.exports = {
	createResource,
	deleteResource,
	getResource,
    updateResource,
};