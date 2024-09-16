// backend/routes/bookingRoutes.js
const express = require("express");
const {
  createBooking,
  getUserBookings,
  cancelBooking,
  getBookings,
  verifyBooking,
} = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/book", createBooking);
router.get("/my-bookings", authMiddleware, getUserBookings);
router.put("/cancel/:bookingId", cancelBooking);
router.get("/event/:eventId", getBookings);
router.get("/verify/:bookingId", verifyBooking);

module.exports = router;
