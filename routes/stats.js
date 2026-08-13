const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const statsFile = path.join(__dirname, '../stats.json');

// Initialize stats file if it doesn't exist
const initStats = () => {
  if (!fs.existsSync(statsFile)) {
    const defaultStats = {
      totalVisits: 0,
      totalConversions: 0,
      totalDownloads: 0,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync(statsFile, JSON.stringify(defaultStats, null, 2));
  }
};

initStats();

// Get stats
router.get('/', (req, res) => {
  try {
    const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read stats' });
  }
});

// Increment visits
router.post('/visit', (req, res) => {
  try {
    const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
    stats.totalVisits += 1;
    stats.lastUpdated = new Date().toISOString();
    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
    res.json({ success: true, visits: stats.totalVisits });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update stats' });
  }
});

// Increment conversions
router.post('/conversion', (req, res) => {
  try {
    const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
    stats.totalConversions += 1;
    stats.lastUpdated = new Date().toISOString();
    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
    res.json({ success: true, conversions: stats.totalConversions });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update stats' });
  }
});

// Increment downloads
router.post('/download', (req, res) => {
  try {
    const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
    stats.totalDownloads += 1;
    stats.lastUpdated = new Date().toISOString();
    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
    res.json({ success: true, downloads: stats.totalDownloads });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update stats' });
  }
});

module.exports = router;