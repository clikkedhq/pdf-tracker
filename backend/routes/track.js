const express = require('express');
const View = require('../models/View');
const router = express.Router();

router.post('/', async (req, res) => {
  const { uuid, userAgent, ip } = req.body;

  try {
    await View.create({
      uuid,
      userAgent,
      ip,
      timestamp: new Date()
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log view' });
  }
});

module.exports = router;
