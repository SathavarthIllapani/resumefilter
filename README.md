<div align="center">

<img src="public/logo.svg" alt="Resume Filter logo" width="96" height="96" />

# Resume Filter

**Stop scrolling through resumes. Start shortlisting the right people.**

A fast, modern dashboard for recruiters and hiring managers to filter, organize, and analyze candidates across the entire hiring pipeline.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#-license)

[**Live Demo**](https://your-deployment-url.vercel.app) · [**Report a Bug**](https://github.com/SathavarthIllapani/resumefilter/issues) · [**Request a Feature**](https://github.com/SathavarthIllapani/resumefilter/issues)

</div>

---

<!--
  Add a screenshot or GIF here. It is the single biggest boost to a README.
  Save it as public/screenshot.png and uncomment the line below.
-->
<!-- <p align="center"><img src="public/screenshot.png" alt="Resume Filter dashboard preview" width="90%" /></p> -->

## 📖 Overview

Hiring pipelines get messy fast. **Resume Filter** puts every applicant in one clean view, so you can narrow hundreds of candidates down to the right few in seconds, then see how your pipeline is performing at a glance.

- 🔎 **Find** the right people with real-time, multi-criteria filters
- 📋 **Organize** candidates with clear status tracking
- 📊 **Understand** your funnel with live metrics and charts

---

## ✨ Features

| | Feature | What it does |
|---|---|---|
| ⚡ | **Real-time Filtering** | Filter by skills, experience level, education, and application status. Results update instantly as you type or select. |
| 🗂️ | **Candidate Table** | Clean tabular view with contact links, resume previews, and color-coded status badges. |
| 📈 | **Pipeline Dashboard** | KPI cards for Total, Shortlisted, Interviewed, and Rejected candidates, plus distribution charts. |
| 📱 | **Responsive by Design** | Tailwind-powered layout that works on desktop, tablet, and mobile. |
| 🚀 | **Production Ready** | Preconfigured for static hosting and SPA routing on Vercel. |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Hosting** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or higher**
- `npm` (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SathavarthIllapani/resumefilter.git
cd resumefilter

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:8080** (or the URL printed in your terminal) to view the app.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |

---

## 📁 Project Structure

```text
resumefilter/
├── public/
│   ├── favicon.svg              # Custom vector favicon
│   └── logo.svg                 # Application logo
├── src/
│   ├── components/
│   │   ├── CandidateTable.tsx   # Candidate list and table view
│   │   ├── DashboardCharts.tsx  # Pipeline analytics and charts
│   │   ├── FilterPanel.tsx      # Search and parameter filters
│   │   ├── Logo.tsx             # Dedicated logo component
│   │   ├── NavLink.tsx          # Navigation links
│   │   └── StatsCards.tsx       # KPI summary cards
│   ├── data/
│   │   └── candidates.ts        # Mock candidate database
│   ├── hooks/                   # Custom UI and layout hooks
│   ├── lib/                     # Utilities (cn, formatting)
│   ├── pages/
│   │   ├── Index.tsx            # Main dashboard page
│   │   └── NotFound.tsx         # 404 fallback page
│   ├── App.tsx                  # Root application router
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles and Tailwind directives
├── index.html                   # HTML template with custom metadata
├── vercel.json                  # Vercel SPA rewrite rules
├── vite.config.ts               # Vite configuration
└── package.json                 # Dependencies and scripts
```

---

## 🧩 Using Your Own Data

The app ships with sample candidates so you can explore it right away. To use your own, edit [`src/data/candidates.ts`](src/data/candidates.ts) and keep the same shape as the existing entries. Filters, table, and charts update automatically.

Want to connect a real backend? Replace the import in `Index.tsx` with an API call and pass the results down to the same components.

---

## 🚢 Deployment

The repo includes a preconfigured `vercel.json` so client-side routing works out of the box.

**Option 1: Vercel CLI**

```bash
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```

**Option 2: GitHub integration**

Import the repository in your [Vercel dashboard](https://vercel.com/new) and every push will deploy automatically.

---

## 🗺️ Roadmap

- [ ] Import resumes from CSV / JSON
- [ ] Save and share custom filter presets
- [ ] Sortable columns and pagination
- [ ] Export filtered candidates
- [ ] Dark mode
- [ ] Backend / API integration

Have an idea? [Open an issue](https://github.com/SathavarthIllapani/resumefilter/issues).

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👤 Author

**Sathavarth Illapani**

[![GitHub](https://img.shields.io/badge/GitHub-SathavarthIllapani-181717?logo=github&logoColor=white)](https://github.com/SathavarthIllapani)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

If this project helped you, consider giving it a ⭐

</div>
