const express = require('express');

const {
	createVolunteer,
	deleteVolunteer,
	getVolunteer,
	updateVolunteer,
} = require('../controllers/volunteers.controllers.js');

const router = express.Router();

router.get('/create', createVolunteer);
router.get('/deleteById', deleteVolunteer);
router.get('/getById', getVolunteer);
router.get('/updateById', updateVolunteer);

module.exports = router;
