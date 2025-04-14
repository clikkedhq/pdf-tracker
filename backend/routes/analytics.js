const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Route to get all documents and their tracking data
router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
