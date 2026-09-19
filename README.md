# Resume Filter 📄��

A modern, responsive web application for recruiters and hiring managers to filter, organize, and analyze candidate resumes and application pipelines efficiently.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, and optimized for fast deployments on **Vercel**.

---

## ✨ Features

- **Dynamic Candidate Filtering**: Filter applicants in real time by skills, experience level, education, and application status.
- **Candidate Data Table**: Clean tabular display of candidate details, contact links, resume previews, and status badges.
- **Interactive Dashboard & Metrics**: High-level KPI cards (Total Candidates, Shortlisted, Interviewed, Rejected) and pipeline distribution charts.
- **Modern UI & Responsive Design**: Clean aesthetic built with Tailwind CSS, custom vector branding, and mobile-friendly layouts.
- **SPA Routing & Production Ready**: Fully configured for static hosting and single-page application routing on Vercel.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts / Visualizations**: Recharts
- **Hosting / Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/SathavarthIllapani/resumefilter.git](https://github.com/SathavarthIllapani/resumefilter.git)
   cd resumefilter
Install dependencies:

Bash
npm install
Start development server:

Bash
npm run dev
Open http://localhost:8080 (or the URL printed in the terminal) to view the app in your browser.

Build for production:

Bash
npm run build
📁 Project Structure
Plaintext
resumefilter/
├── public/
│   ├── favicon.svg          # Custom vector favicon
│   └── logo.svg             # Application logo
├── src/
│   ├── components/
│   │   ├── CandidateTable.tsx   # Candidate list and table view
│   │   ├── DashboardCharts.tsx  # Pipeline analytics & charts
│   │   ├── FilterPanel.tsx      # Search and parameter filters
│   │   ├── Logo.tsx             # Dedicated Logo component
│   │   ├── NavLink.tsx          # Navigation links
│   │   └── StatsCards.tsx       # KPI summary cards
│   ├── data/
│   │   └── candidates.ts        # Mock candidate database
│   ├── hooks/                   # Custom UI & layout hooks
│   ├── lib/                     # Utility functions (cn, formatting)
│   ├── pages/
│   │   ├── Index.tsx            # Main dashboard page
│   │   └── NotFound.tsx         # 404 Fallback page
│   ├── App.tsx                  # Root application router
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles and Tailwind directives
├── index.html                   # HTML template with custom metadata
├── vercel.json                  # Vercel SPA rewrite routing rules
├── vite.config.ts               # Vite configuration
└── package.json                 # Project dependencies & scripts
🚢 Deployment on Vercel
The project includes a pre-configured vercel.json rewrite configuration for seamless client-side routing.

Deploy via CLI:
Bash
# 1. Preview Deployment
npx vercel

# 2. Production Deployment
npx vercel --prod
Or connect the GitHub Repository directly to your Vercel dashboard for automatic CI/CD on every push.

👤 Author
Sathavarth Illapani — GitHub

📄 License
This project is licensed under the MIT License.
