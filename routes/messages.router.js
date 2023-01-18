const express = require('express');

const { createMessage, getMessage, updateMessage, deleteMessage } = require('../controllers/messages.controller.js');

const router = express.Router();

router.post('/create', createMessage);
router.get('/getByUser/:userId', getMessage);
router.put('/updateById/:messageId', updateMessage);
router.delete('/deleteById/:messageId', deleteMessage);

module.exports = router;
