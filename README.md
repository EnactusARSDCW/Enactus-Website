# ENACTUS ARSD — Official Website

The complete frontend for **Enactus ARSD**, the Enactus chapter of Atma Ram Sanatan Dharma College, University of Delhi.

Built with [Astro](https://astro.build) — every route is a real static page, so deep links, refreshes and back/forward navigation all work with zero client-side routing code.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/projects` | Projects directory |
| `/projects/kalakaari` · `/srijan` · `/samvedna` · `/niramaya` | Project detail pages |
| `/shop` | Shop catalogue (working `?tag=` filters) |
| `/shop/canvas-tote` · `/shop/jade-plant` | Product detail pages |
| `/team` | Our Team |
| `/stories` | Stories archive |
| `/stories/:slug` | 4 article pages |
| `/gallery` | Gallery with lightbox |
| `/join-us` | Join Us + interest form |
| `/partners` | Partners |
| `/contact` | Contact + enquiry form |
| `/privacy-policy`, `/terms` | Legal pages |
| `404.html` | Designed not-found page |

## Content & imagery policy

- **Text content** is drawn only from the chapter's own public posts (its former Wix site, Instagram, LinkedIn). Every impact claim carries a `source` link in [src/data/projects.ts](src/data/projects.ts) and [src/data/stories.ts](src/data/stories.ts).
- **No AI imagery, stock photos, or fabricated people.** Wherever a photograph is missing, a labelled placeholder renders ("Project photograph to be added") — drop the real file into `public/images/…` and set the `image` field in the data module; the placeholder is replaced one-for-one.
- **Team roster** is intentionally empty placeholders until the chapter confirms names/roles.
- **Forms** are honest frontend placeholders: they validate input and hand the message to the visitor's own email app — nothing is stored or claimed as saved.

## Editing content

All content lives in typed data modules under `src/data/`:

- `site.ts` — name, email, social links, nav
- `projects.ts` — the four projects
- `products.ts` — shop items
- `stories.ts` — articles
- `gallery.ts` — gallery sections
- `team.ts` — team partitions (add members when confirmed)
- `partners.ts` — partner listings

## Deployment (GitHub → Vercel)

The build is fully static (`dist/`). On Vercel, no extra config is needed — it serves `404.html` for unknown routes automatically. Update `site` in `astro.config.mjs` to the final domain before launch.

**Supabase-ready:** the data modules are the future boundary — swap each `src/data/*.ts` export for a query and the typed interfaces in `src/types.ts` stay the contract. Nothing in the components changes.
# Enactus-Website
