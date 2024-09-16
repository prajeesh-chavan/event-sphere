// backend/controllers/bookingController.js
const Booking = require("../models/Booking");
const Event = require("../models/Event");

exports.createBooking = async (req, res) => {
  try {
    const { eventId, numberOfTickets, userId } = req.body;
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const totalAmount = numberOfTickets * 100;

    const booking = new Booking({
      user: userId,
      event: eventId,
      numberOfTickets,
      totalAmount,
      eventTitle: event.title,
      eventDate: event.date,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating booking", error: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ user: userId });
    res.json(bookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking || booking.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "canceled";
    await booking.save();
    res.json({ message: "Booking canceled successfully", booking });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error canceling booking", error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const bookings = await Booking.find({ event: eventId });
    res.json(bookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching event bookings", error: err.message });
  }
};

exports.verifyBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json({ message: "Booking verified successfully", booking });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error verifying booking", error: err.message });
  }
};
