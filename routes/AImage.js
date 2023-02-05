const express = require("express");
const { generateImage } = require("../controllers/AImage");
const router = express.Router();

router.post("/images", generateImage)

module.exports = router;