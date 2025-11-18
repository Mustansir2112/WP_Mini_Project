const express = require("express");
const { profile, bids } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", auth, profile);
router.get("/bids", auth, bids);

module.exports = router;

