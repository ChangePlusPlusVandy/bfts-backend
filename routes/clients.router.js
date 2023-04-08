const express = require('express');

const { createClient, deleteClient, getClient, updateClient, getAllClient } = require('../controllers/clients.controllers.js');

const router = express.Router();

router.post('/create', createClient);
router.delete('/deleteById', deleteClient);
router.get('/getById', getClient);
router.patch('/updateById', updateClient);
router.get('/getAll', getAllClient);

module.exports = router;
