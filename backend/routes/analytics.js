const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

router.get('/documents', async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/documents/:uuid', async (req, res) => {
  const { uuid } = req.params;
  try {
    const document = await Document.findOne({ uuid });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

