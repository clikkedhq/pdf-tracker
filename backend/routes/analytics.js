const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Document = require('../models/Document'); // Make sure this path is correct

// Get all documents (basic analytics view)
router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ message: 'Failed to fetch documents' });
  }
});

module.exports = router;
