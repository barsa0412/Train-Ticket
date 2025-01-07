const express = require('express');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes'); // Import room routes
const path = require('path');
require("dotenv").config( { path: "./config.env" } )
const app = express();
const PORT = process.env.PORT || 5000;

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
// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


// Start the server
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}' );
});