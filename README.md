# Cari2Ge — Study in Georgia

Marketing website for an education-consulting agency that helps international
students apply to universities in Georgia (visa support, accommodation,
arrival services). Live at [cari2ge.com](https://cari2ge.com).

Built as a static, no-build-step site so it can be deployed and edited with
zero tooling overhead — plain HTML/CSS/JS hosted on Netlify.

## Stack

- HTML5, CSS3 (custom properties, `clamp()` for fluid type, no framework)
- Vanilla JavaScript (no bundler, no dependencies)
- [Netlify](https://www.netlify.com/) — hosting, forms, redirects
- Netlify Forms for the application form (spam honeypot + native validation)

## Features

- Responsive layout, mobile nav, touch-swipeable feature carousel
- Custom country/phone-code picker (searchable, keyboard-accessible combobox)
  driven by a static country dataset — no external API
- Shared header/footer loaded via `fetch()` from `header.html` / `footer.html`
  so navigation only needs to be edited in one place
- SEO: Open Graph tags, JSON-LD (`Organization`, `WebSite`, `WebPage`),
  `sitemap.xml`, canonical URLs
- Accordion FAQ, lazy-loaded images, `www`/`http` → canonical `https` redirects

## Project structure

```
.
├── index.html, about.html, services.html, courses.html,
│   universities.html, life.html   # pages
├── header.html, footer.html       # shared partials, injected client-side
├── main.js                        # page interactions (nav, carousel, FAQ, country picker)
├── include.js                     # fetches and injects header/footer partials
├── styles/                        # style.css, normalize.css
├── images/                        # static assets
├── sitemap.xml, robots.txt        # SEO
└── _redirects                     # Netlify redirect rules
```

## Running locally

No build step — serve the folder with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Known trade-offs

This is intentionally framework-free: pages are hand-written HTML rather than
generated from a template, which means some markup is duplicated across
pages. For a site this size that keeps the deploy pipeline at zero and edits
trivial; a static-site generator (Astro/Eleventy) would be the next step if
the page count grows significantly.
