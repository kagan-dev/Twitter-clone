const express = require("express");
const router = express.Router();
const {
  signup,
  logout,
  login,
  getMe,
} = require("../controllers/authController");
const { protectRoute } = require("../middleware/protectRoute");

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
