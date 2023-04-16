const express = require('express');

const {
	createVolunteer,
	deleteVolunteer,
	getVolunteer,
	updateVolunteer,
} = require('../controllers/volunteers.controllers.js');

const router = express.Router();

router.post('/create', createVolunteer);
router.delete('/deleteById/:volunteerId', deleteVolunteer);
router.get('/getById/:volunteerId', getVolunteer);
router.patch('/updateById/:volunteerId', updateVolunteer);

module.exports = router;
