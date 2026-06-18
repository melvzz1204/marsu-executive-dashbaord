const express = require("express");
const cors = require("cors");

// 1. Import Route Files
const authRoutes = require("./routes/authRoutes");
const globalRecognitionRoutes = require("./routes/achievements/globalRecognitionRoutes");
/* const analyticsRoutes = require("./routes/analyticsRoutes"); */

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// Global Middleware
app.use(cors(corsOptions)); // Keep this custom configuration
app.use(express.json());

app.use((req, res, next) => {
  console.log(`📡 Server received a ${req.method} request to: "${req.url}"`);
  next();
});

// 2. Mount Route Files
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/global-recognition", globalRecognitionRoutes); // <-- Added this

// Catch-All 404 Middleware
app.use((req, res) => {
  console.log(`[DEBUG LOG] Received a ${req.method} request to ${req.url}`);
  res
    .status(404)
    .send(
      `Backend saw a ${req.method} request to ${req.url} but nothing matches.`,
    );
});

module.exports = app;