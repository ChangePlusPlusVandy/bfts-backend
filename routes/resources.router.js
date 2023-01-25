const express = require('express');

const {
	createResource,
	deleteResource,
	getResource,
	updateResource,
} = require('../controllers/resources.controller.js');

const router = express.Router();

router.post('/create', createMessage);
router.delete('/deleteById', deleteMessage);
router.get('/getByField', getMessage);
router.put('/updateById', updateMessage);

module.exports = router;
