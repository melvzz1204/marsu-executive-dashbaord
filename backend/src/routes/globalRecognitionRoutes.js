// routes/globalRecognitionRoutes.js
const express = require("express");
const router = express.Router();

const {
  getCollegeMetrics,
  createMetricCard,
  updateMetricCard,
  deleteMetricCard,
} = require("../controllers/globalRecognitionController");

// Assuming your auth middleware file provides protect and authorize methods
const { protect, authorize } = require("../middleware/authMiddleware"); 

// All matrix routes require authentication
router.use(protect);

router
  .route("/")
  // Executives, Deans, and Admins can read dashboard data
  .get(authorize("executive", "dean", "admin"), getCollegeMetrics)
  // ONLY admins can add matrix content
  .post(authorize("admin"), createMetricCard);

router
  .route("/:id")
  // ONLY admins can update matrix content (e.g., adding sub-metrics)
  .put(authorize("admin"), updateMetricCard) // 💡 Added the PUT route handler
  // ONLY admins can delete matrix content
  .delete(authorize("admin"), deleteMetricCard);

module.exports = router;