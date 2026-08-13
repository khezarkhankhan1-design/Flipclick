# FlipClick 🍃❤️

**FlipClick - I Love PDF**

A high-quality file conversion platform for converting PDF, PNG, and JPG files with advanced editing and compression features.

## Features

✅ **PNG ↔ JPG Conversion** - Convert between PNG and JPG formats  
✅ **Image to PDF** - Convert PNG/JPG images to PDF  
✅ **PDF Compressor** - Reduce PDF file sizes  
✅ **PDF Editor** - Add text, images, and annotations  
✅ **High Quality** - Maintains excellent quality during conversion  
✅ **Fast Processing** - Quick file processing  
✅ **Stats Tracking** - Real-time visitor and conversion tracking  

## Project Structure

```
flipclick/
├── server.js                 # Express server
├── routes/
│   ├── conversions.js       # File conversion API routes
│   └── stats.js             # Statistics tracking routes
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── Tools.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│       └── index.html
└── package.json
```

## Installation & Setup

### Backend Setup

```bash
# Install dependencies
npm install

# Start server (development)
npm run dev

# Start server (production)
npm start
```

### Frontend Setup

```bash
cd client

# Install dependencies
npm install

# Start React app
npm start

# Build for production
npm run build
```

## API Endpoints

### Conversions

- `POST /api/convert/png-to-jpg` - Convert PNG to JPG
- `POST /api/convert/jpg-to-png` - Convert JPG to PNG
- `POST /api/convert/image-to-pdf` - Convert image to PDF
- `POST /api/convert/compress-pdf` - Compress PDF
- `POST /api/convert/edit-pdf` - Edit PDF

### Statistics

- `GET /api/stats` - Get current statistics
- `POST /api/stats/visit` - Log a visit
- `POST /api/stats/conversion` - Log a conversion
- `POST /api/stats/download` - Log a download

## Technology Stack

**Backend:**
- Node.js + Express
- Sharp (image processing)
- PDF-lib (PDF manipulation)
- Multer (file uploads)

**Frontend:**
- React 18
- CSS3 with animations
- Responsive design

## Features Coming Soon

🚀 Advanced PDF Editor  
🚀 Batch Processing  
🚀 Cloud Storage Integration  
🚀 API for developers  
🚀 Mobile App  

## Statistics

The website displays real-time statistics including:
- 👥 Total Visitors
- 🔄 Total Conversions
- 📥 Total Downloads

## Design Highlights

🎨 Modern gradient UI  
🎨 Smooth animations  
🎨 Responsive design  
🎨 Heart-shaped leaf logo 🍃❤️  
🎨 Professional color scheme (Purple & Blue)  

## License

MIT License - Feel free to use this project!

## Support

For issues or feature requests, please create an issue in the repository.

---

Made with ❤️ by FlipClick Team
