# KovilGo — Travel-Tech Platform

> **EVERY JOURNEY, BRIGHTER.**

KovilGo is a production-oriented travel-tech platform focused on personalised spiritual journeys, curated heritage destinations, and underrated cultural experiences across India.

---

## Current Status: Phase 0 Completed

Phase 0 establishes the architectural foundation, development environment, type systems, database schemas, security boundaries, and CI/CD automation.

**Active Constraints:**
- Website consumer pages, booking flows, and payment integrations will be implemented in subsequent phases.
- Real database and payment credentials will be configured during their designated implementation milestones.

---

## Tech Stack Overview

- **Framework**: [Next.js](https://nextjs.org) (App Router, React 19)
- **Language**: TypeScript (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (Official brand palette: `#FDB913`, `#080808`, `#FFF9F0`, `#E7E7E7`)
- **Database & ORM**: [Supabase PostgreSQL](https://supabase.com) via [Drizzle ORM](https://orm.drizzle.team)
- **Validation**: [Zod](https://zod.dev)
- **Testing**: [Vitest](https://vitest.dev) (Unit & Integration), [Playwright](https://playwright.dev) (E2E), [k6](https://k6.io) (Load Testing)
- **CI/CD**: GitHub Actions (Lint, Typecheck, Test, Build, Security Scan)
- **Security Baseline**: CSP, HSTS, server-only secret isolation, credential sanitizing logger

---

## Getting Started

### 1. Prerequisites
- Node.js 20 or 22+
- npm 10+

### 2. Configure Environment Variables
Copy the configuration template:
```bash
cp .env.example .env.local
```
*(The platform runs locally in build-safe development mode even before remote credentials are provisioned).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the Phase 0 foundation status page.

### 4. Health Check Endpoint
```bash
curl http://localhost:3000/api/health
```

---

## Verification & Testing Commands

| Command | Action |
|---|---|
| `npm run lint` | Runs ESLint flat config checking Next.js & TypeScript rules |
| `npm run typecheck` | Runs `tsc --noEmit` under strict TypeScript compiler rules |
| `npm run test` | Runs Vitest unit, integration, and security test suites |
| `npm run test:e2e` | Runs Playwright cross-browser end-to-end tests |
| `npm run build` | Builds the production Next.js bundle |
| `npm run db:generate` | Generates Drizzle migration files from schemas |

---

## Documentation

- [Architecture Guide](docs/ARCHITECTURE.md)
- [Security Architecture](docs/SECURITY.md)
- [Database & Drizzle Guide](docs/DATABASE.md)
- [API Conventions](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
