const express = require("express");
const router = express.Router();

// @route   GET /api/v1/analytics/overview
// @desc    Get top-level KPI summary cards for dashboard
router.get("/overview", (req, res) => {
  // This mockup data is structured exactly how React chart components prefer it
  res.status(200).json({
    totalEnrollment: 14250,
    activeResearchGrantsUSD: 3450000,
    totalColleges: 8,
  });
});

// @route   GET /api/v1/analytics/enrollment-by-college
// @desc    Get data stream for React Bar/Pie charts
router.get("/enrollment-by-college", (req, res) => {
  res.status(200).json([
    { college: "Engineering", students: 4500 },
    { college: "Sciences", students: 3100 },
    { college: "Business", students: 3800 },
    { college: "Arts & Humanities", students: 2850 },
  ]);
});

module.exports = router;
