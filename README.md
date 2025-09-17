<h1 align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" width="70" />
  <br />
  MCP Project Showcase
</h1>

<p align="center">
  🚀 A modern React + TypeScript + Vite showcase for MCP (Model Context Protocol) projects, tutorials, and blogs.
</p>

<p align="center">
  <a href="https://protocol-forge-lab.vercel.app/"><b>🌐 Live Demo</b></a> •
  <a href="https://github.com/Harshsfd/MCP-Project"><b>📦 Repository</b></a>
</p>

---

<p align="center">
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🛠 Tech Stack</a> •
  <a href="#-quick-start">⚡ Quick Start</a> •
  <a href="#-project-structure">📂 Project Structure</a> •
  <a href="#-how-content--data-work">📝 Data</a> •
  <a href="#-api-config-placeholder">🌐 API</a> •
  <a href="#-deployment-vercel">🚀 Deployment</a> •
  <a href="#-detailed-analysis--architecture-notes">🔍 Analysis</a> •
  <a href="#-recommended-improvements">📌 Improvements</a> •
  <a href="#-how-to-add-a-new-project">➕ Add Project</a> •
  <a href="#-contributing">🤝 Contributing</a> •
  <a href="#-troubleshooting">❓ Troubleshooting</a> •
  <a href="#-license">📜 License</a> •
  <a href="#-acknowledgements">🙏 Acknowledgements</a> •
  <a href="#-contact">📬 Contact</a>
</p>

---

## ✨ Features
- ⚡ **Single-page React app (Vite)** with multiple pages: Home, Projects, Project Detail, Blog, About  
- 📂 **Demo data** for projects & blog posts (`src/data/`)  
- 🧩 **Reusable UI components** (Navbar, Hero, ProjectCard, CodeBlock, UI primitives)  
- 🔗 **React Router** for client routing + **TanStack Query** for data fetching patterns  
- 🎨 **Modern UX**: toasts, tooltips, syntax highlighting (PrismJS), carousels, icons (lucide)  
- ☁️ **Ready-to-deploy** with [Vercel](https://vercel.com/) (includes `vercel.json`)  

---

## 🛠 Tech Stack

<p align="center">
  <!-- Core -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="45" title="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="45" title="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45" title="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="45" title="Vite" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="45" title="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="45" title="CSS3" />

  <!-- Styling -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="45" title="Tailwind CSS" />

  <!-- Routing / Query / Forms -->
  <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" height="28" title="React Router" />
  <img src="https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" height="28" title="TanStack Query" />
  <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" height="28" title="React Hook Form" />

  <!-- UI & Icons -->
  <img src="https://img.shields.io/badge/Radix%20UI-161618?style=for-the-badge&logo=radixui&logoColor=white" height="28" title="Radix UI" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" height="28" title="shadcn/ui" />
  <img src="https://img.shields.io/badge/Lucide-0D9488?style=for-the-badge&logo=lucide&logoColor=white" height="28" title="Lucide Icons" />

  <!-- Utils -->
  <img src="https://img.shields.io/badge/PrismJS-323330?style=for-the-badge&logo=prism&logoColor=white" height="28" title="PrismJS" />
  <img src="https://img.shields.io/badge/Embla%20Carousel-111827?style=for-the-badge&logo=carousel&logoColor=white" height="28" title="Embla Carousel" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" height="28" title="Socket.io" />

  <!-- Deployment -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="45" title="Vercel" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="45" title="Git" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="45" title="GitHub" />
</p>

---

## ⚡ Quick Start

> Requirements: **Node.js 18+**

```bash
# 1. Clone repo
git clone https://github.com/Harshsfd/MCP-Project
cd MCP-Project

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Run dev server
npm run dev
# open http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
````

---

## 📂 Project Structure

```bash
/ (repo root)
├─ index.html
├─ package.json
├─ vite.config.ts
├─ vercel.json
├─ public/                # static assets
└─ src/
   ├─ main.tsx            # app bootstrap
   ├─ App.tsx             # router + providers
   ├─ pages/              # route pages
   ├─ components/         # components (Navbar, Hero, ProjectCard)
   ├─ components/ui/      # UI primitives
   ├─ data/               # mockProjects.ts, blog images
   ├─ api.ts              # API helper (placeholder URL)
   ├─ hooks/              # custom hooks
   └─ lib/                # utils
```

---

## 📝 How Content & Data Work

* **Projects** → `src/data/mockProjects.ts`
* **Blog images** → `src/data/*.jpeg`
* Replace static imports with `src/api.ts` + **react-query** for live API integration.

---

## 🌐 API Config (placeholder)

```ts
// src/api.ts
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
```

👉 Add `VITE_API_URL` in `.env` and your deployment platform (Vercel/GitHub Actions).

---

## 🚀 Deployment (Vercel)

This repo includes a **Vercel rewrite** for SPA routing.

**Steps**:

1. Push repo to GitHub
2. Import into Vercel
3. Configure build:

   * Build command → `npm run build`
   * Output dir → `dist`
4. Add env vars if needed (`VITE_API_URL`)

---

## 🔍 Detailed Analysis & Architecture Notes

1. **Architecture**: Vite SPA, modular components, shadcn-style UI.
2. **Data**: Mostly static → easily swappable with APIs.
3. **Routing**: `react-router-dom` + Vercel SPA rewrites.
4. **UX & a11y**: Good base, check `alt` tags & keyboard nav.
5. **Performance**: Optimize images (WebP/AVIF, srcset).
6. **Observability**: Placeholder socket + charts → extend with backend.

---

## 📌 Recommended Improvements

### Short Term

* ✅ Add LICENSE (MIT suggested)
* ✅ Add README (this file)
* 🔄 Replace hard-coded API\_URL → env variable
* ♿ Improve accessibility (alt text, focus states)

### Medium Term

* 📡 Move content to CMS or backend API
* 🖼 Optimize images (WebP/AVIF + responsive)
* 🤖 Add GitHub Actions (lint, typecheck, build)

### Long Term

* ⚙️ Add SSR/SSG (for SEO) or migrate to Next.js
* 🧪 Add E2E tests (Cypress/Playwright)
* 📊 Add analytics + error reporting (Sentry/LogRocket)

---

## ➕ How to Add a New Project

Edit `src/data/mockProjects.ts`:

```ts
{
  id: "new-proj-1",
  title: "My New MCP Project",
  description: "Short description",
  fullDescription: "Longer description...",
  level: "intermediate",
  tags: ["MCP", "example"],
  language: "typescript",
  createdAt: new Date().toISOString(),
  codeSnippet: `// example code`,
  imageUrl: "/src/data/my-image.jpeg",
  githubUrl: "https://github.com/your/repo"
}
```

---

## 🤝 Contributing

1. Fork repo
2. Create a branch:

```bash
git checkout -b feat/add-new-project
```

3. Make changes & test with `npm run dev`
4. Commit, push, and open a PR

✅ Checklist:

* [ ] Lint passes (`npm run lint`)
* [ ] TypeScript build passes (`tsc --noEmit`)
* [ ] Images optimized + alt text added

---

## ❓ Troubleshooting

* **Port in use?** → Vite defaults to `5173`. Try `PORT=5174 npm run dev`.
* **404 on refresh in production?** → SPA fallback required (Vercel already configured).

---

## 📜 License

MIT License © 2025 [Harsh Bhardwaj](https://github.com/Harshsfd)

---

## 🙏 Acknowledgements

Thanks to the open-source ecosystem: **Vite, React, Tailwind, Radix UI, TanStack Query**, and more.

---

## 📬 Contact

For issues, ideas, or improvements → open a PR or issue.

```

---

✅ Now you have:  
- Repo link added  
- Stylish navigation bar with anchors to **all sections**  
- Polished section headers with emojis  
- Tech stack icons kept intact  
```
