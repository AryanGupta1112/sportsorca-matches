# 🏟️ SportsOrca - Upcoming Matches Viewer

A full-stack web application to display upcoming soccer matches along with highlight videos, using data from the [ScoreBat API](https://www.scorebat.com/video-api/v3/).

## 🚀 Features

- 📅 Displays upcoming soccer match titles and scheduled dates
- 🎥 Direct links to match highlight videos
- 🌙 Dark mode toggle with icon (🌙 / ☀️) + persistent theme
- 🔄 Sorted with latest matches at the top
- 📱 Fully responsive modern UI using HTML, CSS & JavaScript

---

## 🧱 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, CORS, node-fetch
- **API**: [ScoreBat Video API (v3)](https://www.scorebat.com/video-api/v3/)

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
npm install express cors node-fetch
node server.js
Server will run on: http://localhost:3000/api/matches
```
### 🌐 Frontend
Simply open frontend/index.html in your browser.

### 🌗 Dark Mode
Click the 🌙 or ☀️ icon on the top-right to toggle themes

Theme preference is saved locally

### 📦 API Used
ScoreBat API: https://www.scorebat.com/video-api/v3/

No API key required

Provides video highlights and match metadata



