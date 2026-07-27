# Vietnamese Gospel Church · Hội Thánh Phúc Âm

A modern, fully bilingual (English / Tiếng Việt) website for Vietnamese Gospel Church,
built with **Angular 21**, **PrimeNG**, and standalone components.

## Highlights

- **Bilingual everywhere** — a signal-based `LanguageService` with a `localize` pipe
  toggles every piece of content between English and Vietnamese (persisted to
  `localStorage`). No double i18n builds.
- **PrimeNG UI** — themed with a custom "Sacred Minimal" crimson preset
  (`src/app/core/theme.ts`). Uses Button, Accordion, Galleria, and Tag.
- **Eight pages** — Home, About (with a "What We Believe" accordion), Ministries,
  Events, Sermons, Gallery, Visit/Contact, and Give (links to an external giving site).
- **Standalone + OnPush + lazy routes**, modern control flow, and `NgOptimizedImage`.

## Project structure

```
src/app/
  core/        LanguageService, LocalizePipe, i18n types, PrimeNG theme preset
  shared/      church-assets.ts, site.data.ts, nav.data.ts
  layout/      MainLayout, SiteHeader (nav + EN/VI toggle), SiteFooter
  pages/       home, about, events, give, ministries, sermons, visit, gallery
```

## Editing content

Church-specific details are realistic placeholders — update them in:

- `src/app/shared/site.data.ts` — name, address, phone/email, **giving URL**, socials, service times
- `src/app/pages/**/**.data.ts` — page content (beliefs, events, ministries, sermons, leadership)
- `src/app/shared/church-assets.ts` — photo paths (images live in `public/assets/`)

## Development

```bash
npm install
npm start        # ng serve → http://localhost:4200/
npm run build    # production build
```

## Deploy to Cloudflare Workers

This site is configured as a static-assets Worker with SPA routing
(`wrangler.jsonc`). Angular client routes are served via
`not_found_handling: single-page-application`.

### Permanent deployment (recommended)

Temporary preview deploys expire after about an hour. For a stable URL, use one of
these options:

**Option A — Deploy from your machine (fastest first time)**

```bash
git pull origin main
npm install
npx wrangler login          # opens browser to authenticate with Cloudflare
npm run deploy              # builds Angular + deploys to your account
```

Wrangler prints a permanent `https://vietnamese-gospel-church.<your-subdomain>.workers.dev`
URL. That URL stays live until you delete the Worker.

**Option B — GitHub Actions (best for ongoing deploys)**

1. In Cloudflare, go to **My Profile → API Tokens** and create a token with
   **Edit Cloudflare Workers** permission.
2. Copy your **Account ID** from the Cloudflare dashboard (Workers & Pages → right sidebar).
3. Add these GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push to `main` or run the **Deploy Worker** workflow manually from the Actions tab.

### Local preview

```bash
npm run preview:worker   # build + local Worker preview at http://localhost:8787
```

After deploy, Wrangler prints your `*.workers.dev` URL. You can also attach a
custom domain in the Cloudflare dashboard.

> Note: on networks with TLS inspection, install with the system certificate store:
> `set NODE_OPTIONS=--use-system-ca && npm install`

## Design

Three Figma design directions were explored (Sacred Minimal, Warm Heritage,
Modern Sanctuary); the site implements **Sacred Minimal**. Brand tokens live in
`src/styles.scss` (`--vgc-*`) and the PrimeNG preset in `src/app/core/theme.ts`.
