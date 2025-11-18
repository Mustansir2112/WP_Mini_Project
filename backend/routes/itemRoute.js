const express = require("express");
const { placeBid } = require("../controllers/itemController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Place a bid on an item
router.post("/bids", auth, placeBid);
// router.post("/newItem",newItem);

module.exports = router;
