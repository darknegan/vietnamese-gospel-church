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

> Note: on networks with TLS inspection, install with the system certificate store:
> `set NODE_OPTIONS=--use-system-ca && npm install`

## Design

Three Figma design directions were explored (Sacred Minimal, Warm Heritage,
Modern Sanctuary); the site implements **Sacred Minimal**. Brand tokens live in
`src/styles.scss` (`--vgc-*`) and the PrimeNG preset in `src/app/core/theme.ts`.
