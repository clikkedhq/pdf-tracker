const express = require('express');
const Document = require('../models/Document');
const path = require('path');
const router = express.Router();

router.get('/:uuid', async (req, res) => {
  const doc = await Document.findOne({ uuid: req.params.uuid });

  if (!doc) return res.status(404).send('Document not found');

  res.send(`
    <html>
      <body>
        <iframe src="/uploads/${doc.filename}" width="100%" height="800px"></iframe>
        <script src="/tracker.js"></script>
        <script>
          window._pdfTrackUUID = "${doc.uuid}";
        </script>
      </body>
    </html>
  `);
});

module.exports = router;
