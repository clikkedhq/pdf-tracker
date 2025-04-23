// routes/analytics.js
const express = require('express');
const router = express.Router();
const Document = require('../models/Document'); // 👈 fixed casing

console.log('✅ analytics.js loaded');

// GET /api/analytics/documents
router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find({}).sort({ createdAt: -1 });
    res.status(200).json(documents);
  } catch (error) {
    console.error('❌ Error fetching documents:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

