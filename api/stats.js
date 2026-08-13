const fs = require('fs');
const path = require('path');

const statsFile = path.join(process.cwd(), 'stats.json');

const getStats = () => {
  try {
    if (!fs.existsSync(statsFile)) {
      return { totalVisits: 0, totalConversions: 0, totalDownloads: 0 };
    }
    return JSON.parse(fs.readFileSync(statsFile, 'utf8'));
  } catch (error) {
    return { totalVisits: 0, totalConversions: 0, totalDownloads: 0 };
  }
};

const saveStats = (stats) => {
  try {
    stats.lastUpdated = new Date().toISOString();
    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
  } catch (error) {
    console.error('Error saving stats:', error);
  }
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const stats = getStats();
    return res.status(200).json(stats);
  }

  if (req.method === 'POST') {
    const action = req.query.action;
    let stats = getStats();

    if (action === 'visit') {
      stats.totalVisits += 1;
    } else if (action === 'conversion') {
      stats.totalConversions += 1;
    } else if (action === 'download') {
      stats.totalDownloads += 1;
    }

    saveStats(stats);
    return res.status(200).json({ success: true, stats });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}