const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: String,
  spot: String,
  date: String
});

module.exports = mongoose.model('Booking', BookingSchema);