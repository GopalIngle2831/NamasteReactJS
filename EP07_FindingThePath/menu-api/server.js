const express = require("express");
const cors = require("cors");

const restaurants = require("./data/restaurants");

const app = express();

// Enable CORS for frontend requests
app.use(cors());

// Root route (to avoid 403 / confusion)
app.get("/", (req, res) => {
  res.send("Food API is running");
});

// Get all restaurants
app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

// Start server
app.listen(4000, () => {
  console.log("API running at http://localhost:4000");
});