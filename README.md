# DBO Web App

Access the live preview

- https://cc7d4bdf-b7c3-4fe9-a7f9-0f505135fe74.fly.dev/
- Useful routes:
  - / (Home)
  - /dbo-process
  - /tag-my-home
  - /marketplace
  - /our-team
  - /assessment-results

## Tech stack

- React 18 + Vite 7
- TypeScript, Tailwind CSS, Radix UI
- React Router v6
- Netlify Functions (serverless) for `/api/*` (see netlify/functions/api.ts)

## Local development

Requirements: Node 18+ and pnpm 10+

```bash
pnpm install
pnpm dev
```

The dev server URL will be printed in the terminal (Vite default is http://localhost:5173).

## Build and preview

```bash
pnpm build           # builds client and server bundles
pnpm start           # serves the built app (node dist/server/node-build.mjs)
```

## Tests and type-checking

```bash
pnpm test            # run unit tests (vitest)
pnpm typecheck       # run TypeScript checks
```

## API (serverless)

- Netlify function entry: `netlify/functions/api.ts`
- Local dev is proxied by Vite; in production, `/api/*` is routed to the Netlify Function via `netlify.toml`.

## Deploy

### Netlify (recommended)

- This repo includes `netlify.toml` configured for a static SPA build and serverless functions.
- Build command: `pnpm build:client`
- Publish directory: `dist/spa`
- Functions directory: `netlify/functions`

Using Builder.io with MCP integrations:

- To deploy from Builder.io, connect the Netlify MCP and trigger a deploy. If Netlify isn’t connected yet, click “Open MCP popover” in Builder.io and connect Netlify.

### Vercel

- Works as a static deployment from the Vite client build:
  - Build command: `pnpm build:client`
  - Output directory: `dist/spa`
- For server functions on Vercel you would need to adapt the server entry; current repo is pre-configured for Netlify Functions.

## Environment variables

- None required for local development by default.

## Project structure (high level)

- client/ — React app (pages, components, styles)
- server/ — SSR/server entry used by `pnpm start`
- netlify/functions/ — serverless functions
- public/ — static assets
