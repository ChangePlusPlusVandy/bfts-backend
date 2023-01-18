const express = require('express');

const { createResource, deleteResource, getResource, updateResource } = require('../controllers/resources.controller.js');

const router = express.Router();

router.get('/create', createMessage);
router.get('/deleteById', deleteMessage);
router.get('/getByField', getMessage);
router.get('/updateById', updateMessage);

module.exports = router;
