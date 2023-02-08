const Volunteer = require('../models/volunteers');

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

const deleteVolunteer = (req, res) => {
	res.send('Delete Volunteer');
};

const getVolunteer = async (req, res) => {
	res.send('Get Volunteer');
	try {
		const data = await Volunteer.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
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
