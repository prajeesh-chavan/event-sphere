// backend/routes/authRoutes.js
const express = require("express");
const {
  registerUser,
  loginUser,
  resetPassword,
  forgotPassword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
