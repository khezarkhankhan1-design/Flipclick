# FlipClick - Quick Start Guide 🚀

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone Repository**
```bash
git clone https://github.com/khezarkhankhan1-design/flipclick.git
cd flipclick
```

2. **Install Backend Dependencies**
```bash
npm install
```

3. **Install Frontend Dependencies**
```bash
cd client
npm install
cd ..
```

4. **Create .env file**
```bash
echo "PORT=5000" > .env
echo "NODE_ENV=development" >> .env
```

5. **Run Backend (Terminal 1)**
```bash
npm run dev
```
Backend will run on http://localhost:5000

6. **Run Frontend (Terminal 2)**
```bash
cd client
npm start
```
Frontend will run on http://localhost:3000

---

## Deploy on Vercel (Recommended) ✨

### Step 1: Prepare Repository
- Push all code to GitHub
- Ensure README.md is updated

### Step 2: Deploy
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository "flipclick"
4. Click "Import"
5. Set Environment:
   - `NODE_ENV`: production
   - `PORT`: 5000
6. Click "Deploy"

### Step 3: Get Your URL
- Vercel will provide: `https://flipclick.vercel.app`
- Your site is LIVE! 🎉

---

## Google Search Console Setup (IMPORTANT!) 📊

### Step 1: Verify Domain
1. Go to https://search.google.com/search-console/
2. Click "Add property"
3. Enter: `https://flipclick.vercel.app`
4. Choose verification method: HTML file
5. Download the file
6. Add to `public/` folder
7. Commit and push
8. Click "Verify"

### Step 2: Submit Sitemap
1. Left menu → Sitemaps
2. Add new sitemap: `sitemap.xml`
3. URL: `https://flipclick.vercel.app/sitemap.xml`
4. Click "Submit"

### Step 3: Monitor Performance
- Check "Performance" tab
- Monitor clicks, impressions, CTR
- Fix any crawl errors

---

## Google Analytics Setup 📈

1. Go to https://analytics.google.com
2. Create new property
3. Get Tracking ID (GA-XXXX)
4. Add to `client/public/index.html` in `<head>`
5. Deploy

---

## Domain Setup (Optional)

### Using Vercel Domains
1. Vercel Dashboard → Settings → Domains
2. Buy domain (cheap!)
3. Auto-configured

### Using External Domain (Godaddy, Namecheap)
1. Buy domain
2. Copy Vercel nameservers
3. Update domain DNS
4. Add in Vercel Settings

---

## Monitoring & Maintenance

### Weekly
- Check Google Search Console
- Monitor server logs
- Fix any issues

### Monthly
- Update content
- Check performance metrics
- Add new features

### Quarterly
- SEO audit
- Backlink analysis
- User feedback review

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf node_modules client/node_modules
npm install
cd client && npm install
```

### Server won't start
```bash
# Check port
lsof -i :5000
# Kill process
kill -9 <PID>
```

### Static files not loading
- Check `public/` folder exists
- Verify files are committed
- Restart Vercel deployment

---

## Contact & Support
- GitHub Issues: https://github.com/khezarkhankhan1-design/flipclick/issues
- Email: khezarkhankhan1@gmail.com

---

Made with ❤️ by FlipClick Team
