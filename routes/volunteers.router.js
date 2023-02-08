const express = require('express');

const {
	createVolunteer,
	deleteVolunteer,
	getVolunteer,
	updateVolunteer,
} = require('../controllers/volunteers.controllers.js');

const router = express.Router();

router.post('/create', createVolunteer);
router.delete('/deleteById', deleteVolunteer);
router.get('/getById', getVolunteer);
router.put('/updateById', updateVolunteer);

module.exports = router;
