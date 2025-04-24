// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Route Imports
const uploadRoutes = require('./routes/upload');
const viewRoutes = require('./routes/view');
const trackRoutes = require('./routes/track');
const analyticsRoutes = require('./routes/analytics');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/tracker.js', express.static(path.join(__dirname, 'public', 'tracker.js')));

// MongoDB Connection
console.log('Mongo URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Route Mounts
app.use('/api/upload', uploadRoutes);
app.use('/view', viewRoutes);
app.use('/api/track', trackRoutes);
console.log('📦 Mounting analytics routes at /api/analytics');
app.use('/api/analytics', analyticsRoutes); // << IMPORTANT

// Fallback for 404
app.use((req, res) => {
  res.status(404).send('🔍 Route not found');
});

// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
