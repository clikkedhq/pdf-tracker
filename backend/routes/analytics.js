const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// GET /api/analytics/test - simple health check
router.get('/test', (req, res) => {
  res.status(200).send('✅ /api/analytics route is working!');
});

// GET /api/analytics/documents - fetch all documents with views
router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
