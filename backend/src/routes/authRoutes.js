const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUserName,
} = require("../controllers/authController");

router.post("/login", login);
router.post("/register", register);
router.get("/name", protect, getUserName);

module.exports = router;
