const express = require('express');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes'); // Import room routes
const path = require('path');
const cors = require("cors")
require("dotenv").config( { path: "./config.env" } )
const PORT = process.env.PORT || 5000;

// CONNECT TO DB
connectDB()

// INITIATE APP
const app = express()



// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());

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