const express = require('express');

const { createClient, deleteClient, getClient, updateClient } = require('../controllers/clients.controllers.js');

const router = express.Router();

router.get('/create', createClient);
router.get('/deleteById', deleteClient);
router.get('/getById', getClient);
router.get('/updateById', updateClient);

module.exports = router;
