const express = require('express');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes'); // Import room routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Home Page of the Train Ticket Reservation");
});

// Use room routes with prefix '/api'
app.use('/api', ticketRoutes);

// Start the server
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}' );
});