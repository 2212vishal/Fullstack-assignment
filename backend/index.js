const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
require("dotenv").config();
const database = require("./config/database");

// Connecting to database
database.connect();

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes
const cardRoutes = require('./routes/cardRoutes');
app.use('/api/v1', cardRoutes);

// Testing the server
app.get("/ping", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Listening to the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
