// backend/models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  numberOfTickets: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "confirmed", "canceled"],
  },
  paymentDetails: { type: Object },
  bookedAt: { type: Date, default: Date.now },
  eventTitle: { type: String },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
