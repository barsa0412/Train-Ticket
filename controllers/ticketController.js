const TrainTicketReservation = require('../models/ticketModels'); // Adjust the path to your model

// Create a new train ticket reservation
exports.createReservation = async (req, res) => {
  try {
    let newReservation = new TrainTicketReservation({
      passenger_name: req.body.passenger_name,
            passenger_email: req.body.passenger_email,
            train_number: req.body.train_number,
            train_name: req.body.train_name,
          departure_station : req.body.departure_station,
           arrival_station : req.body.arrival_station,
           seat_number : req.body.seat_number,
           class : req.body.class
    } 
     );

   savedReservation = await savedReservation.save();
    res.send(savedReservation)
  } catch (error) {
    res.status(400).send( error.message );
  }
};

// Get all train ticket reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await TrainTicketReservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a train ticket reservation by ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await TrainTicketReservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a train ticket reservation by ID
exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await TrainTicketReservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedReservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a train ticket reservation by ID
exports.deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await TrainTicketReservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.status(200).json({ message: 'Reservation successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get reservations by class
exports.getReservationsByClass = async (req, res) => {
  try {
    const { travelClass } = req.query; // e.g., /reservations/class?travelClass=First%20Class
    const reservations = await TrainTicketReservation.find({ class: travelClass });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get reservations by train number
exports.getReservationsByTrainNumber = async (req, res) => {
  try {
    const { train_number } = req.query; // e.g., /reservations/train?train_number=12345
    const reservations = await TrainTicketReservation.find({ train_number });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
