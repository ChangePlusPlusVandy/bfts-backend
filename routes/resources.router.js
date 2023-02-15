const express = require('express');

const {
	createResource,
	deleteResource,
	getResource,
	updateResource,
} = require('../controllers/resources.controller.js');

const router = express.Router();

router.post('/create', createResource);
router.delete('/deleteById', deleteResource);
router.get('/getByField', getResource);
router.put('/updateById', updateResource);

module.exports = router;
