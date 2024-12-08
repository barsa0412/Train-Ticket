const express = require("express");
const connectDB = require("./config/db"); // Ensure this file establishes the MongoDB connection
const cors = require("cors");
const path = require("path");
const trainTicketRoutes = require("./routes/trainTicketRoutes"); // Import train ticket routes
require("dotenv").config({ path: "./config.env" });

// Connect to Database
connectDB();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// API Routes
app.use("/api/tickets", trainTicketRoutes);

// Serve Static Files (for frontend, e.g., React)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// Start the Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
