const Volunteer = require('../models/volunteers');

const createVolunteer = (req, res) => {
	res.send('Create Volunteer');
};

const deleteVolunteer = (req, res) => {
	res.send('Delete Volunteer');
};

const getVolunteer = (req, res) => {
	res.send('Get Volunteer');
};

const updateVolunteer = (req, res) => {
	res.send('Update Volunteer');
};

module.exports = {
	createVolunteer,
	deleteVolunteer,
	getVolunteer,
	updateVolunteer,
};
