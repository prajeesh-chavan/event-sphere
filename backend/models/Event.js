const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  availableTickets: Number,
  totalTickets: Number,
  price: Number,
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
