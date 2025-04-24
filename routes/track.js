const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

router.post('/:uuid', async (req, res) => {
  try {
    const doc = await Document.findOne({ uuid: req.params.uuid });

    if (!doc) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Increment views and update last viewed timestamp
    doc.views = (doc.views || 0) + 1;
    doc.lastViewedAt = new Date();
    await doc.save();

    res.status(200).json({ message: '✅ View tracked successfully' });
  } catch (err) {
    console.error('❌ Error tracking view:', err);
    res.status(500).json({ message: 'Server error while tracking view' });
  }
});

module.exports = router;
