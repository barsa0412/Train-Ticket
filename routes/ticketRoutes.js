const express = require('express');
const router = express.Router();
const trainTicketController = require('../controllers/trainTicketController'); // Adjust the path as needed

// Define routes for train ticket reservations

// Create a new reservation
router.post('/reservations', trainTicketController.createReservation);

// Get all reservations
router.get('/reservations', trainTicketController.getAllReservations);

// Get a reservation by ID
router.get('/reservations/:id', trainTicketController.getReservationById);

// Update a reservation by ID
router.put('/reservations/:id', trainTicketController.updateReservation);

// Delete a reservation by ID
router.delete('/reservations/:id', trainTicketController.deleteReservation);

// Get reservations by travel class
router.get('/reservations/class', trainTicketController.getReservationsByClass);

// Get reservations by train number
router.get('/reservations/train', trainTicketController.getReservationsByTrainNumber);

module.exports = router;
