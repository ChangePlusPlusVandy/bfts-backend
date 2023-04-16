const mongoose = require('mongoose');
const Volunteer = require('../models/volunteers.js');

const createVolunteer = async (req, res) => {
	const volunteer = new Volunteer({
		name: req.body.name,
		firebaseid: req.body.firebaseid,
		pronouns: req.body.pronouns,
		race: req.body.race,
		birthday: req.body.birthday,
		location: req.body.location,
		phone: req.body.phone,
		email: req.body.email,
		vaccination: req.body.vaccination,
		startdate: req.body.startdate,
		startlocation: req.body.startlocation,
		socialmedia: req.body.socialmedia,
		background: req.body.background,
	});
	try {
		const data = await volunteer.save();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteVolunteer = async (req, res) => {
	try {
		const filter = { _id: mongoose.Types.ObjectId(req.params.volunteerId) };
		const targetPost = await Volunteer.deleteOne(filter);
		res.send(targetPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getVolunteer = async (req, res) => {
	try {
		const filter = { firebaseid: mongoose.Types.ObjectId(req.params.volunteerId) };
		const data = await Volunteer.findOne(filter);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateVolunteer = async (req, res) => {
	try {
		const filter = { firebaseid: mongoose.Types.ObjectId(req.body.volunteerId) };
		const targetPost = await Volunteer.findOneAndUpdate(filter, {
			location: req.body.location,
			phone: req.body.phone,
			email: req.body.email,
			vaccination: req.body.vaccination,
			socialmedia: req.body.socialmedia,
			background: req.body.background,
		});
		res.send(targetPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createVolunteer,
	deleteVolunteer,
	getVolunteer,
	updateVolunteer,
};
