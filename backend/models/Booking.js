const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  numberOfTickets: Number,
  totalPrice: Number,
  status: { type: String, enum: ['confirmed', 'canceled'], default: 'confirmed' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
