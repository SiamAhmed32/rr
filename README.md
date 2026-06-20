# RemoteRecruit – Features Page

A responsive recreation of the RemoteRecruit Features page from Figma, built as a single-page React application.

## Tech Stack

- **React 19** with Vite 8
- **Tailwind CSS v4** for styling
- **Poppins** (Google Fonts) for typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── App.jsx                 # Page layout and section order
├── main.jsx                # React entry point
├── index.css               # Tailwind theme, shared utilities
├── hooks/
│   └── useScrollReveal.js  # Intersection Observer scroll animations
└── components/
    ├── artwork/            # Figma composite mockups
    ├── cards/              # Membership and pricing cards
    ├── layout/             # Navbar, feature section wrapper, artwork scaler
    ├── sections/           # Page sections (Hero, Footer, etc.)
    └── ui/                 # Reusable buttons, badges, typography

public/
├── hero/                   # Hero wave background
├── navbar/                 # Logo
├── global/                 # Global Reach artwork
├── showcase/               # Showcase section artwork
├── talents/                # Talent profile artwork
├── help/                   # Help CTA artwork
├── membership/             # Membership card artwork
├── footer/                 # Footer background and icons
└── pricing/                # Pricing section icons
```

## Features Implemented

- Fully responsive layout (mobile, tablet, desktop)
- Component-based architecture with reusable UI and layout components
- Scroll-triggered section reveal animations (fade-in / slide-up)
- Hover and transition states on buttons and links
- Scroll-to-top button
- Lazy-loaded images (`loading="lazy"`) on below-the-fold artwork
- Deferred artwork mounting (`LazyWhenVisible`) so PNG layers load only when scrolled near
- Self-hosted Poppins fonts (no render-blocking Google Fonts request)
- `content-visibility: auto` on below-the-fold sections
- Semantic HTML and ARIA labels on navigation, sections, and controls
- Mock FAQ content in Common Questions

## Lighthouse / Performance

**Important:** Audit the **production build**, not the Vite dev server (`npm run dev`). Dev mode scores much lower (often ~50 Performance).

```bash
npm run build
npm run preview
```

Then run Lighthouse in Chrome **Incognito** (extensions skew scores) on `http://localhost:4173`.

| Category | Target | Notes |
|----------|--------|--------|
| Performance | ≥ 90 | Use production preview or deployed URL; compress PNG assets if needed |
| Accessibility | ≥ 90 | Already passing in local audits (~96) |

Image lazy loading uses three layers:
1. Native `loading="lazy"` on below-the-fold `<img>` tags
2. `LazyWhenVisible` — sections and artwork mount only after scrolling into view (not when peeking at the bottom edge)
3. Build-time PNG compression via `vite-plugin-image-optimizer`

Hero wave uses a CSS background (not an `<img>`) so the LCP element is the heading text, which paints immediately.

## Deployment

Build the project and deploy the `dist/` folder to Vercel, Netlify, or similar:

```bash
npm run build
```

## Known Limitations

- **Deployment:** Live URL not yet published (pending Vercel/Netlify deploy).
- **Assets:** Export all Figma PNG assets into the matching `public/` folders before building for production. The repo includes SVG assets; PNG paths are referenced in components.
- **Links:** Sign In, Sign Up, social links, and CTA buttons use `#` placeholders.
- **FAQ answers:** Placeholder copy is repeated for all three questions.
- **Lighthouse:** Run on `npm run preview` or the deployed URL in Incognito. Compress large PNGs in `public/` if Performance stays below 90.

## Design Reference

[Figma – RemoteRecruit Home](https://www.figma.com/design/EtejDtLu3wavBclhHY6JNa/Design?node-id=1-131)
