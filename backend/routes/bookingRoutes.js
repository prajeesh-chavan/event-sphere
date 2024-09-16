// backend/routes/bookingRoutes.js
const express = require("express");
const {
  createBooking,
  getUserBookings,
  cancelBooking,
  getBookings,
} = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/book", createBooking);
router.get("/my-bookings", authMiddleware, getUserBookings);
router.put("/cancel/:bookingId", cancelBooking);
router.get("/event/:eventId", getBookings);

module.exports = router;
