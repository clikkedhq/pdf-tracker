// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Route imports
const uploadRoutes = require('./routes/upload');
const viewRoutes = require('./routes/view');
const trackRoutes = require('./routes/track');
const analyticsRoutes = require('./routes/analytics');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file handling
app.use('/uploads', express.static('uploads'));
app.use('/tracker.js', express.static('public/tracker.js'));

// MongoDB connection
console.log('Mongo URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Mount API routes
app.use('/api/upload', uploadRoutes);
app.use('/view', viewRoutes);
app.use('/api/track', trackRoutes);
app.use('/api/analytics', analyticsRoutes);

// ✅ Root route to confirm API is live
app.get('/', (req, res) => {
  res.send('✅ Clikked API is live!');
});

// ❌ 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('🔍 Route not found');
});

// 🚀 Start server on Render-assigned port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

