const express = require("express");

const {
    createMessage,
    deleteMessage,
    getMessage,
} = require("../controllers/messages.controller.js");

const router = express.Router();

router.get("/create", createMessage);
router.get("/deleteById", deleteMessage);
router.get("/getByUser", getMessage);

module.exports = router;