const express = require('express');

const {
	createResource,
	deleteResource,
	getResource,
	updateResource,
	getAllResources,
} = require('../controllers/resources.controller.js');

const router = express.Router();

router.post('/create', createResource);
router.delete('/deleteById', deleteResource);
router.get('/getById', getResource);
router.patch('/updateById', updateResource);
router.get('/getAll', getAllResources)

module.exports = router;
