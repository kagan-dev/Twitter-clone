const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const {
  createPost,
  deletePost,
  commentOnPost,
  likeUnlikePosts,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} = require("../controllers/postController");
const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.post("/like/:id", protectRoute, likeUnlikePosts);
router.get("/all", protectRoute, getAllPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);

module.exports = router;
