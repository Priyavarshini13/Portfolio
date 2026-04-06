require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// ── Routes ──
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Portfolio server is running 🚀' }));
app.use('/api/contact', contactRouter);

// ── 404 handler ──
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

// ── Error handler ──
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅  Server running at http://localhost:${PORT}`);
});
