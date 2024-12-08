const mongoose = require('mongoose');

const TrainTicketReservationSchema = new mongoose.Schema({
  passenger_name: {
    type: String,
    required: true
  },
  passenger_email: {
    type: String,
    required: true
  },
  train_number: {
    type: String,
    required: true
  },
  train_name: {
    type: String
  },
  departure_station: {
    type: String,
    required: true
  },
  arrival_station: {
    type: String,
    required: true
  },
  departure_time: {
    type: Date,
    required: true
  },
  arrival_time: {
    type: Date,
    required: true
  },
  seat_number: {
    type: String
  },
  class: {
    type: String,
    enum: ['First Class', 'Second Class', 'Sleeper', 'General'],
    required: true
  },
  fare: {
    type: Number,
    required: true
  },
  booking_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TrainTicketReservation = mongoose.model('train_ticket_reservation', TrainTicketReservationSchema);
