const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Health check route: GET /api/analytics/test
router.get('/test', (req, res) => {
  res.status(200).send('✅ /api/analytics route is working!');
});

// Main analytics: GET /api/analytics/documents
router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 }); // sorted newest first
    res.status(200).json(documents);
  } catch (error) {
    console.error('❌ Error fetching analytics:', error);
    res.status(500).json({ message: 'Server error while fetching analytics' });
  }
});

module.exports = router;
