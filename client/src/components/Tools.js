import React, { useState } from 'react';
import './Tools.css';

function Tools({ onConversion }) {
  const [activeTab, setActiveTab] = useState('converter');
  const [selectedFile, setSelectedFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage('');
  };

  const handleConvert = async (conversionType) => {
    if (!selectedFile) {
      setMessage('Please select a file first');
      return;
    }

    setConverting(true);
    setMessage('Converting... Please wait');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || window.location.origin;
      const response = await fetch(`${apiUrl}/api/convert/${conversionType}`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `converted.${getFileExtension(conversionType)}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setMessage('✅ Conversion successful! Download started.');
        
        // Log stats
        fetch(`${apiUrl}/api/stats?action=conversion`, { method: 'POST' });
        fetch(`${apiUrl}/api/stats?action=download`, { method: 'POST' });
        onConversion();

        setTimeout(() => {
          setSelectedFile(null);
          setMessage('');
        }, 2000);
      } else {
        setMessage('❌ Conversion failed. Try again.');
      }
    } catch (error) {
      console.error('Conversion error:', error);
      setMessage('❌ Error: ' + error.message);
    }

    setConverting(false);
  };

  const getFileExtension = (type) => {
    const map = {
      'png-to-jpg': 'jpg',
      'jpg-to-png': 'png',
      'image-to-pdf': 'pdf',
      'compress-pdf': 'pdf'
    };
    return map[type] || 'file';
  };

  return (
    <section className="tools" id="tools">
      <div className="tools-container">
        <h2>Tools & Converters</h2>
        <p className="tools-subtitle">Choose your conversion tool and get started instantly</p>

        <div className="tools-tabs">
          <button 
            className={`tab-btn ${activeTab === 'converter' ? 'active' : ''}`}
            onClick={() => setActiveTab('converter')}
          >
            🔄 Converter
          </button>
          <button 
            className={`tab-btn ${activeTab === 'editor' ? 'active' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            ✏️ PDF Editor
          </button>
          <button 
            className={`tab-btn ${activeTab === 'compressor' ? 'active' : ''}`}
            onClick={() => setActiveTab('compressor')}
          >
            🗜️ Compressor
          </button>
        </div>

        <div className="tools-content">
          {activeTab === 'converter' && (
            <div className="tool-panel">
              <div className="upload-area">
                <input 
                  type="file" 
                  id="file-input" 
                  onChange={handleFileSelect}
                  accept="image/*,.pdf"
                />
                <label htmlFor="file-input" className="upload-label">
                  <span className="upload-icon">📁</span>
                  <p>Click to upload or drag and drop</p>
                  <p className="upload-hint">PNG, JPG, PDF up to 50MB</p>
                </label>
              </div>

              {selectedFile && (
                <div className="file-info">
                  <p>📄 {selectedFile.name}</p>
                  <p className="file-size">({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</p>
                </div>
              )}

              {message && (
                <div className="message">
                  <p>{message}</p>
                </div>
              )}

              <div className="conversion-grid">
                <button 
                  className="conversion-btn"
                  onClick={() => handleConvert('png-to-jpg')}
                  disabled={converting}
                >
                  <span className="conversion-icon">🖼️➡️📸</span>
                  <span>PNG to JPG</span>
                </button>
                <button 
                  className="conversion-btn"
                  onClick={() => handleConvert('jpg-to-png')}
                  disabled={converting}
                >
                  <span className="conversion-icon">📸➡️🖼️</span>
                  <span>JPG to PNG</span>
                </button>
                <button 
                  className="conversion-btn"
                  onClick={() => handleConvert('image-to-pdf')}
                  disabled={converting}
                >
                  <span className="conversion-icon">🖼️➡️📄</span>
                  <span>Image to PDF</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'editor' && (
            <div className="tool-panel">
              <div className="coming-soon">
                <h3>✏️ PDF Editor</h3>
                <p>Add text, images, annotations to your PDF files with ease</p>
                <p className="coming-soon-text">🚀 Coming Soon</p>
              </div>
            </div>
          )}

          {activeTab === 'compressor' && (
            <div className="tool-panel">
              <div className="coming-soon">
                <h3>🗜️ PDF Compressor</h3>
                <p>Reduce file size without losing quality</p>
                <p className="coming-soon-text">🚀 Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Tools;