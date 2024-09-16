const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/upload"); // Middleware for handling file uploads
const authMiddleware = require("../middlewares/authMiddleware");

// Route to get user profile
router.get("/profile", authMiddleware, userController.getUserProfile);

// Route to update user profile
router.put("/profile", authMiddleware, userController.updateUserProfile);

// Route to upload profile picture
router.post(
  "/profile-picture",
  authMiddleware,
  upload.single("profilePicture"),
  userController.updateProfilePicture
);

module.exports = router;
