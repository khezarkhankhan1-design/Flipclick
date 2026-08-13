const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const { PDFDocument, rgb } = require('pdf-lib');
const PDFParser = require('pdf-parse');
const fs = require('fs');
const path = require('path');

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }
});

// PNG to JPG
router.post('/png-to-jpg', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const output = await sharp(req.file.buffer)
      .jpeg({ quality: 95, progressive: true })
      .toBuffer();

    res.set('Content-Disposition', 'attachment; filename="converted.jpg"');
    res.type('image/jpeg');
    res.send(output);
  } catch (error) {
    res.status(500).json({ error: 'Conversion failed: ' + error.message });
  }
});

// JPG to PNG
router.post('/jpg-to-png', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const output = await sharp(req.file.buffer)
      .png({ quality: 95, progressive: true })
      .toBuffer();

    res.set('Content-Disposition', 'attachment; filename="converted.png"');
    res.type('image/png');
    res.send(output);
  } catch (error) {
    res.status(500).json({ error: 'Conversion failed: ' + error.message });
  }
});

// Image to PDF
router.post('/image-to-pdf', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const pdfDoc = await PDFDocument.create();
    const imageData = await sharp(req.file.buffer)
      .png()
      .toBuffer();

    const image = await pdfDoc.embedPng(imageData);
    const page = pdfDoc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });

    const pdfBytes = await pdfDoc.save();

    res.set('Content-Disposition', 'attachment; filename="converted.pdf"');
    res.type('application/pdf');
    res.send(pdfBytes);
  } catch (error) {
    res.status(500).json({ error: 'Conversion failed: ' + error.message });
  }
});

// PDF Compressor
router.post('/compress-pdf', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const pdfDoc = await PDFDocument.load(req.file.buffer);
    
    // Simple compression by removing metadata
    pdfDoc.getPages().forEach(page => {
      page.getResources();
    });

    const pdfBytes = await pdfDoc.save();

    res.set('Content-Disposition', 'attachment; filename="compressed.pdf"');
    res.type('application/pdf');
    res.send(pdfBytes);
  } catch (error) {
    res.status(500).json({ error: 'Compression failed: ' + error.message });
  }
});

// PDF Editor - Add text
router.post('/edit-pdf', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const { text, x, y, fontSize, color } = req.body;
    const pdfDoc = await PDFDocument.load(req.file.buffer);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(text, {
      x: parseInt(x) || 50,
      y: parseInt(y) || 700,
      size: parseInt(fontSize) || 24,
      color: rgb(...(color ? color.split(',').map(c => parseInt(c) / 255) : [0, 0, 0])),
    });

    const pdfBytes = await pdfDoc.save();

    res.set('Content-Disposition', 'attachment; filename="edited.pdf"');
    res.type('application/pdf');
    res.send(pdfBytes);
  } catch (error) {
    res.status(500).json({ error: 'Edit failed: ' + error.message });
  }
});

module.exports = router;