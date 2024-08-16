const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const router = express.Router();
const {
  getUserProfile,
  followUnfollowUser,
  getSuggestedUsers,
  updateUserProfile,
} = require("../controllers/userController");

router.get("/profile/:username", protectRoute, getUserProfile);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/update", protectRoute, updateUserProfile);

module.exports = router;
