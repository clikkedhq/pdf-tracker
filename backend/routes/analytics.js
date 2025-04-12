const express = require('express');
const View = require('../models/View');
const router = express.Router();

router.get('/views', async (req, res) => {
  try {
    const views = await View.find().sort({ timestamp: -1 });
    res.json(views);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching views' });
  }
});

module.exports = router;
