// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// ROUTES
const uploadRoutes = require('./routes/upload');
const viewRoutes = require('./routes/view');
const trackRoutes = require('./routes/track');
const analyticsRoutes = require('./routes/analytics');

const app = express();

app.use(cors());
app.use(express.json());

// STATIC ASSETS
app.use('/uploads', express.static('uploads'));
app.use('/tracker.js', express.static('public/tracker.js'));

// MONGO CONNECTION
console.log('Mongo URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ROUTES
app.use('/api/upload', uploadRoutes);
app.use('/view', viewRoutes);
app.use('/api/track', trackRoutes);
app.use('/api/analytics', analyticsRoutes); // <-- THIS is what enables /api/analytics/*

app.get('*', (req, res) => {
  res.status(404).send('❌ Route not found in Express app');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
