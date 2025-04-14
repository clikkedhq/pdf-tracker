const express = require('express');
const multer = require('multer');
const Document = require('../models/Document');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

router.post('/', upload.single('pdf'), async (req, res) => {
    console.log('📥 Upload route hit');
  const file = req.file;
  const doc = await Document.create({
    filename: file.filename,
    uuid: uuidv4()
  });
  res.json({ link: `${process.env.BASE_URL}/view/${doc.uuid}` });
});

module.exports = router;
