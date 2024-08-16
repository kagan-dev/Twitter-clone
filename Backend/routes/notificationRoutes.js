const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const {
  getNotifications,
  deleteNotifications,
  deleteNotification,
} = require("../controllers/notificationController");
const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
router.delete("/", protectRoute, deleteNotification);

module.exports = router;
