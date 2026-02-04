# Wedding Web Application

A full-stack wedding web application built with **Next.js (App Router)** and **TypeScript**, styled with **Tailwind CSS**, and deployed as a production site.

**Live site:** https://wedding-web-application-personal-98898c03.vercel.app

---

## Repository layout

- `app/` — Next.js App Router frontend (routes, UI, server actions/components, etc.)
- `backend/` — Backend/API services and supporting server code
- `public/` — Static assets
- `auth.ts`, `auth.config.ts`, `middleware.ts` — Authentication + route protection middleware
- `tailwind.config.ts`, `postcss.config.js` — Styling configuration
- `staticwebapp.config.json`, `swa-cli.config.json` — Static Web Apps configuration

---

## Tech stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS
- **Auth:** Wired via `auth.ts` / `auth.config.ts` and `middleware.ts`
- **Package manager:** pnpm (`pnpm-lock.yaml`)

---

## Getting started (local dev)

### 1) Install dependencies

```bash
pnpm install
```

If you prefer npm:

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root.

Common variables for Next.js + auth setups:

```bash
# Base URL for local dev
NEXTAUTH_URL=http://localhost:3000

# Used to sign/encrypt auth tokens/cookies
NEXTAUTH_SECRET=replace-with-a-strong-secret

# Backend/API (if the frontend calls into backend/)
BACKEND_URL=http://localhost:xxxx
```

> Your app may require additional variables (OAuth provider keys, database URLs, email provider settings, etc.).  
> If the app fails at runtime, check server logs and add any missing environment variables.

### 3) Run the app

```bash
pnpm dev
```

Open: `http://localhost:3000`

---

## Running the backend (if applicable)

This repo includes a `backend/` directory. How it runs depends on how it’s configured.

Typical pattern:

```bash
cd backend
pnpm install
pnpm dev
```

---

## Build & production

```bash
pnpm build
pnpm start
```

---

## Deployment

The app is deployed and accessible at the **Live site** link above.

If deploying via Azure Static Web Apps tooling, this repo includes:

- `staticwebapp.config.json`
- `swa-cli.config.json`

Keep those configs aligned with your routes/auth requirements.
