import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {
  const [stats, setStats] = useState({
    totalVisits: 0,
    totalConversions: 0,
    totalDownloads: 0
  });

  useEffect(() => {
    // Log visit
    fetch('/api/stats/visit', { method: 'POST' })
      .then(res => res.json())
      .catch(err => console.error('Failed to log visit:', err));

    // Fetch stats
    fetchStats();
  }, []);

  const fetchStats = () => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Failed to fetch stats:', err));
  };

  return (
    <div className="App">
      <Header />
      <Hero stats={stats} />
      <Tools onConversion={fetchStats} />
      <Footer stats={stats} />
    </div>
  );
}

export default App;