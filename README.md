# Jeevan Mahesha - Personal Portfolio

[![Deploy](https://github.com/JeevanMahesha/JeevanMahesha.github.io/actions/workflows/deploy.yaml/badge.svg)](https://github.com/JeevanMahesha/JeevanMahesha.github.io/actions/workflows/deploy.yaml)

A modern, responsive personal portfolio website showcasing projects, skills, and professional experience. Built with Next.js and Tailwind CSS.

## Features

- **Responsive design**: Optimized for all device sizes
- **Modern UI/UX**: Clean, professional interface
- **Fast performance**: Static export for a fast, cache-friendly site
- **Projects showcase**: Presentation of work and tooling
- **Skills & about**: Background and technical focus
- **Contact**: Easy ways to get in touch

## Tech stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI**: React, Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, Simple Icons
- **Language**: TypeScript
- **Package manager**: pnpm

## Getting started

### Prerequisites

- Node.js (see [.node-version](.node-version))
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/JeevanMahesha/JeevanMahesha.github.io.git
cd JeevanMahesha.github.io
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

`next build` is configured with static export (`output: 'export'`). The static site is emitted to `out/`.

```bash
pnpm build
```

## Project structure

```
app/
├── components/     # UI sections and shared components
├── globals.css
├── layout.tsx
└── page.tsx
```

## Deployment (GitHub Pages)

The site is **static-exported** Next.js: CI runs `pnpm build`, then deploys the contents of **`out/`** to the **`gh-page`** branch via [GitHub Actions](.github/workflows/deploy.yaml).

In the repository **Settings → Pages**, the source should match how you publish (e.g. branch `gh-page` at `/` root, or your chosen Pages source).

---

If you found this portfolio useful, consider giving the repo a star.
