const express = require('express');
const path = require('path');
const router = express.Router();
const Document = require('../models/Document');

// Route: GET /view/:uuid
router.get('/:uuid', async (req, res) => {
  try {
    const doc = await Document.findOne({ uuid: req.params.uuid });

    if (!doc) {
      return res.status(404).send('Document not found');
    }

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>View PDF</title>
        </head>
        <body style="margin:0;padding:0;">
          <iframe src="/uploads/${doc.filename}" width="100%" height="800px" style="border:none;"></iframe>
          <script src="/tracker.js"></script>
          <script>
            window._pdfTrackUUID = "${doc.uuid}";
          </script>
        </body>
      </html>
    `);
  } catch (err) {
    console.error('Error loading document view:', err);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
