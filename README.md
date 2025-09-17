Protocol Forge Lab — README

Live demo: https://protocol-forge-lab.vercel.app/


---

Overview

Protocol Forge Lab is a front-end showcase for MCP (Model Context Protocol) projects and tutorials. It’s a modern React + TypeScript + Vite codebase (Vite-powered SPA) that highlights sample MCP projects, blog posts, and documentation pages. The site content is currently driven by local/mock data and static assets in the repository.

This README was created after a deep analysis of the repository and the running demo. Use this README as a drop-in file for a GitHub repo — copy & paste the whole file into your repository's README.md.


---

Table of contents

Features

Tech stack

Quick start (copy/paste)

Project structure

How content & data work (where to edit)

API config (placeholder)

Deployment (Vercel)

Detailed analysis & architecture notes

Recommended improvements & priorities

How to contribute

License



---

Features

Single-page React app (Vite) with multiple pages: Home, Projects, Project Detail, Blog, About

Demo data for projects (static mockProjects.ts) and blog posts

Reusable UI components (Navbar, Hero, ProjectCard, CodeBlock, UI primitives under components/ui)

Uses React Router for client routing and TanStack Query (QueryClient) for data fetching patterns

Typical modern UX pieces: toasts, tooltips, code syntax highlighting (Prism/PrismJS), carousels, icons (lucide)

Ready to deploy to Vercel (project already includes vercel.json)



---

Tech stack

Key packages observed in the repository:

Vite (build tool)

React 18 + TypeScript

Tailwind CSS (utility-first styling)

Radix UI primitives and a components/ui set (shadcn-style component wrappers)

@tanstack/react-query (QueryClient)

react-router-dom (routing)

react-hook-form (forms)

lucide-react (icons)

prismjs (code highlighting)

embla-carousel-react, socket.io-client (used in some UI pieces)



---

Quick start (copy/paste)

> Requirements: Node.js 18+ recommended, npm (or pnpm/yarn)



# 1. clone repo
git clone <your-repo-url>
cd protocol-forge-lab

# 2. install
npm install
# or with pnpm
# pnpm install

# 3. run dev server
npm run dev
# open http://localhost:5173 (Vite default)

# 4. build for production
npm run build

# 5. preview production build locally
npm run preview


---

Project structure (high level)

/ (repo root)
├─ index.html
├─ package.json
├─ vite.config.ts
├─ vercel.json
├─ public/                # static public assets
└─ src/
   ├─ main.tsx            # app bootstrap
   ├─ App.tsx             # router + providers (QueryClient, Toaster)
   ├─ pages/              # route pages (Index, Projects, Blog, About...)
   ├─ components/         # visual components (Navbar, Hero, ProjectCard)
   ├─ components/ui/      # UI primitives (radix/shadcn wrappers)
   ├─ data/               # mockProjects.ts, blog images, local content
   ├─ api.ts              # small helper to call backend (placeholder URL)
   ├─ hooks/              # custom hooks (use-mobile, use-toast)
   └─ lib/                # utils


---

How content & data work — where to edit

Project data (the items shown on the Projects page and details) are defined in:


src/data/mockProjects.ts

Edit this file to add / update projects. Each project includes fields like id, title, description, fullDescription, tags, language, createdAt, codeSnippet, and imageUrl.

Blog images and other example media live in:


src/data/*.jpeg (Blog1.jpeg, Blog2.jpeg...)

Pages use the static data import — to switch to a dynamic API you can replace imports with calls to src/api.ts and use @tanstack/react-query to fetch live data.



---

API config (placeholder)

The project contains a small API helper at src/api.ts. By default it uses a local placeholder API_URL:

// src/api.ts
const API_URL = "http://localhost:5000/api"; // change for production

If you add a real backend, update that constant or wire it to an environment variable (e.g. import.meta.env.VITE_API_URL) and use react-query to fetch.

Tip: Replace the hard-coded API_URL with a Vite env variable for production:

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

Remember to add VITE_API_URL in your Vercel/GitHub Actions environment when deploying.


---

Deployment (Vercel)

This project already includes a vercel.json rewrite that routes everything to / for client-side routing.

Automatic (recommended)

1. Push repo to GitHub.


2. In Vercel, click New Project → import from GitHub.


3. Vercel will detect a Vite React app. If needed, set:

Build command: npm run build

Output directory: dist



4. Add environment variables (e.g. VITE_API_URL) if required.



Manual (vercel CLI)

npm i -g vercel
vercel login
vercel --prod


---

Detailed analysis & architecture notes (deep analysis)

1) Architecture & code organization

A classic Vite SPA: src/main.tsx mounts App.tsx which contains the QueryClientProvider and BrowserRouter.

Pages are organized under src/pages and are composed of smaller src/components components.

UI primitives live in src/components/ui — this pattern matches the shadcn-style component wrappers around Radix primitives.

Data is currently static (mock data in src/data/mockProjects.ts), which makes the site ideal as a static marketing/demo site.


2) Data & state

The code includes @tanstack/react-query (QueryClient) — but most content is static. The repo is ready to adopt dynamic data: swap imports for useQuery hooks and point src/api.ts to your backend.


3) Routing

Client-side routing via react-router-dom. vercel.json contains a rewrite so direct deep-links will work when deployed to Vercel.


4) UX & accessibility

Good: themed UI primitives, toasts, code blocks and layout.

Possible issues to check: validate that all <img> tags have meaningful alt attributes, ensure focus styles for keyboard navigation, and check color contrast for gradient text/overlays.


5) Performance

Static assets (JPEGs) are committed to the repo. For production, consider optimizing image formats (WebP/AVIF), adding srcset, or using an image CDN.


6) Observability & metrics

There are references to socket/io and chart components in the mock code — if you enable a backend emitting metrics, the UI can visualize them. Right now the socket host is not production-ready (check the code for io('ws://localhost:8080')).



---

Recommended improvements & priorities (practical roadmap)

Short term (low effort)

1. Add LICENSE (e.g. MIT) to the repo.


2. Add README.md (this file) — done.


3. Replace the hard-coded API_URL in src/api.ts with import.meta.env.VITE_API_URL. Add an example .env.example file.


4. Add missing alt attributes for all images and verify keyboard navigation.



Medium term (medium effort)

1. Move sample content to a lightweight headless CMS (Sanity/Contentful/Notion/Firestore) or an API to allow non-dev content updates. Use react-query for cache/refresh.


2. Add optimization for images: convert to WebP/AVIF and serve responsive srcset.


3. Add GitHub Actions: lint, typecheck, build, run unit tests.



Long term (high effort)

1. Add SSR or prerendering if SEO or crawling by search engines is a high priority (Vite + SSG frameworks or migrate to Next.js).


2. Add E2E tests (Cypress/Playwright) and structured CI pipelines.


3. Add analytics + error reporting (Sentry/LogRocket) and performance monitoring.




---

How to add a new project (example)

Open src/data/mockProjects.ts and add an object to the exported list. Example snippet:

{
  id: "new-proj-1",
  title: "My New MCP Project",
  description: "A short description",
  fullDescription: "Long form description...",
  level: "intermediate",
  tags: ["MCP", "example"],
  language: "typescript",
  createdAt: new Date().toISOString(),
  codeSnippet: `// example code`,
  imageUrl: "/src/data/my-image.jpeg",
  githubUrl: "https://github.com/your/repo"
}

Then restart the dev server (or the UI may hot-reload depending on your environment).


---

How to contribute

1. Fork the repository.


2. Create a feature branch:



git checkout -b feat/add-new-project

3. Make changes, run npm run dev locally and confirm everything works.


4. Commit, push, and create a PR with a clear description of changes.



Contribution checklist

[ ] Linting passes (npm run lint)

[ ] TypeScript build (tsc --noEmit) passes

[ ] If adding images, use optimized formats and add alt text



---

Troubleshooting / FAQ

Q: npm run dev not starting / port in use?
A: Vite defaults to port 5173. Kill other processes or run PORT=5174 npm run dev.

Q: 404 on refresh in production?
A: Ensure your hosting rewrites are configured (Vercel vercel.json already rewrites to /). For other hosts configure an SPA fallback to index.html.



---

License

The repository currently does not include an explicit license file. If you want to open-source this project, add a LICENSE file (e.g., MIT) at the repo root. Example (MIT):

MIT License

Copyright (c) 2025 Harsh Bhardwaj 

Permission is hereby granted, free of charge, to any person obtaining a copy
... (add the full MIT text here) ...


---

Acknowledgements

This project uses many community packages (Radix UI, Tailwind, Vite, React, TanStack Query). Thanks to those maintainers and the open-source ecosystem.


---

Contact

If you want me to extend this README further (add badges, CI examples, PR templates, or a .env.example), tell me what you want and I will add it.

