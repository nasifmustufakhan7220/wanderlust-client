<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- Add project-specific rules outside the markers above; `next dev` only rewrites content between them. -->

## Project shape

- Single Next.js 16 App Router app (not a monorepo). npm only — `package-lock.json` is the lockfile; don't use pnpm/yarn/bun. Default branch is `master`.
- Entry: `src/app/` — routes: `/` (landing: `page.tsx` → Banner + WhyChoose + Testimonials + Cta), `/destinations`, `/destinations/[id]`, `/add-destination` (client component). `layout.tsx` renders Navbar (wrapped in `<Suspense>`) + Footer and still carries create-next-app default metadata. Path alias `@/*` → `./src/*` (tsconfig). React 19, TypeScript `strict`.
- **External backend required**: this is the client app; it fetches from `http://localhost:8000` (hardcoded in `src/components/DestinationsApi.tsx`, `DestinationDetailsCard.tsx`, `src/app/add-destination/page.tsx` — no env vars). Pages that list/show destinations won't render data unless that API is running.
- `README.md` is untouched create-next-app boilerplate; trust the code, not it.

## Commands

- Dev: `npm run dev` — Lint: `npm run lint` — Build: `npm run build`
- No typecheck script: run `npx tsc --noEmit`. Single-file lint: `npx eslint <path>`.
- No test runner exists in this repo — don't invent test commands or add test frameworks unasked.
- Finish with `npx tsc --noEmit` + `npm run lint`. Lint currently has 2 pre-existing errors (`src/components/ui/carousel.tsx:98`, `src/hooks/use-mobile.ts:14`, `react-hooks/set-state-in-effect`) — don't attribute them to your change, but don't add more.

## Next.js 16 specifics that trip up stale knowledge

- `next.config.ts` enables `cacheComponents: true` and `partialPrefetching: true`. Uncached data access (fetch, `cookies()`, `connection()`) during prerender must be under `<Suspense>` or use `"use cache"` — otherwise `next build` fails with labeled fix options. The established pattern in this repo: fetch inside a server component, wrap it in `<Suspense fallback={<p>Loading...</p>}>` at the page level (see `src/app/destinations/page.tsx`, `destinations/[id]/page.tsx`); `layout.tsx` does the same for Navbar. Read `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` before touching data fetching or routing.
- Build errors in this mode print per-error fix menus in the terminal and dev overlay; follow them rather than guessing.

## Styling & UI (shadcn + Tailwind v4 — differs from defaults)

- Tailwind v4: there is no `tailwind.config`/`postcss.config`. Styles are CSS-first in `src/app/globals.css` (`@theme`, CSS vars), compiled via the `@tailwindcss/turbopack` rule in `next.config.ts`.
- `src/components/ui/` is shadcn-generated (config: `components.json`, style `base-nova`). Add/upgrade components with `npx shadcn add <component>` instead of hand-writing; primitives are **Base UI (`@base-ui/react`)**, not Radix.
- `cn` comes from the `cn` npm package, re-exported by `src/lib/utils.ts`. Import `cn` from `@/lib/utils`; don't rewrite it to the usual clsx/tailwind-merge implementation.
- The theme has **no brand color** (`--primary` is near-black). The brand cyan is `#15A1BF` (hover variant `#128daa`), hardcoded as arbitrary values like `bg-[#15A1BF]`/`text-[#15A1BF]` across `navbar.tsx`, `banner.tsx`, `footer.tsx`, `testimonials.tsx`, `add-destination/page.tsx` — follow that pattern for new UI instead of `bg-primary`/`text-primary` or adding a CSS var.
- Put your own components in `src/components/` (outside `ui/`) or co-located under `src/app/`.
