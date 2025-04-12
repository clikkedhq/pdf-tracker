# 📄 PDF Tracker MVP

Track who views your PDFs, when, and from where — like a light version of [Send.co](https://www.send.co).

## Features
- Upload and host PDFs
- Generate unique view links
- Embed tracking script (IP, device, timestamp)
- Basic viewer analytics dashboard

---

## 🚀 Quick Start

### Backend Setup

1. Clone the repo
2. Navigate to `backend/`
3. Run `npm install`
4. Create a `.env` file (see `.env.example`)

```bash
cd backend
npm install
cp .env.example .env
# update .env with MongoDB URI
```

5. Start server

```bash
npm start
```

### Frontend (Dashboard)

Open `frontend/index.html` in a browser. Change `fetch()` URL if using a hosted backend.

---

## 🛠 Deployment

### MongoDB
Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) → Free M0 Cluster

### Backend
Use [Render](https://render.com) or [Railway](https://railway.app)

### Frontend
Use [Netlify](https://netlify.com) or [Vercel](https://vercel.com)

---

## 📈 Future Features
- Scroll-depth and heatmaps
- Viewer identity (via email prompt)
- Multi-user doc ownership
- Full analytics dashboard