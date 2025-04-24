const express = require('express');
const multer = require('multer');
const Document = require('../models/Document');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Multer config: Save to uploads/ with timestamped name
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    console.log('📥 Upload route hit');
    
    const file = req.file;

    const doc = await Document.create({
      filename: file.filename,
      uuid: uuidv4(),
      views: 0,
      createdAt: new Date()
    });

    res.status(200).json({
      link: `${process.env.BASE_URL}/view/${doc.uuid}`
    });
  } catch (err) {
    console.error('❌ Upload failed:', err);
    res.status(500).json({ message: 'Upload failed. Please try again.' });
  }
});

module.exports = router;
