# AGENTS.md

## Cursor Cloud specific instructions

This is a single **Angular 21 SPA** ("Vietnamese Gospel Church"), a purely client-side
bilingual (EN/VI) website deployed as a static-assets Cloudflare Worker. There is **no
backend, database, or external service** required to run or test it locally.

Standard commands live in `package.json` and `README.md`; reference those. Key services:

- **Dev server** (primary): `npm start` → `ng serve` on http://localhost:4200/. All
  content is bundled static data, so it works fully offline.
- **Worker preview** (production mirror): `npm run preview:worker` → builds then runs
  `wrangler dev` on http://localhost:8787/ with SPA routing. Runs locally without a
  Cloudflare login; `wrangler login` / `npm run deploy` are only needed for real deploys.

Non-obvious caveats:

- `npm test` (`ng test`, Vitest) runs in **watch mode** by default. Use `CI=true npm test`
  to run once and exit.
- The scaffolded `src/app/app.spec.ts` currently **fails (2 tests)** with
  `NG0201: No provider found for ActivatedRoute` — the default test doesn't provide router
  providers even though `App` uses `RouterLink`. This is a pre-existing code issue, not an
  environment problem.
- `npx prettier --check "src/**/*.{ts,html,scss}"` reports pre-existing style warnings in
  ~17 files. Prettier tooling works; the warnings are just unformatted committed code.
