# KovilGo Architecture Documentation

## 1. System Overview

**KovilGo** is a production-oriented travel-tech platform curating personalised spiritual journeys, heritage circuits, and offbeat travel experiences across India.

The architecture is built with a focus on:
- High performance and Core Web Vitals (INP, LCP, CLS)
- Strict application security and least-privilege credential isolation
- Serverless scalability on Vercel backed by Supabase PostgreSQL
- Editorial elegance adhering to the brand tagline: *"EVERY JOURNEY, BRIGHTER."*

---

## 2. Locked Technology Stack

| Layer | Technology | Rationale & Responsibility |
|---|---|---|
| **Framework** | Next.js (App Router) | Server Components by default, streaming SSR, ISR for destinations |
| **Language** | TypeScript (Strict Mode) | Full type-safety, zero `any`, runtime safety with Zod |
| **Styling** | Tailwind CSS | Utility-first, semantic design tokens, light/dark mode support |
| **Motion** | GSAP, Lenis, Framer Motion | Editorial reveals, smooth scrolling, reduced-motion fallbacks |
| **3D Rendering** | Three.js / React Three Fiber | Dynamically loaded interactive globe (deferred/lazy-loaded) |
| **Database** | Supabase PostgreSQL | Relational integrity, geo-spatial queries, Row Level Security |
| **ORM** | Drizzle ORM | Pure TypeScript SQL-like ORM, zero heavy runtime, migration tooling |
| **Authentication** | Supabase Auth (SSR) | Secure cookie session management, PKCE flow, RBAC |
| **Payments** | Cashfree Payments | Payment gateway, UPI, NetBanking, webhook verification |
| **SMS OTP** | MSG91 Integration | Fast Indian telecom routing for mobile number OTP verification |
| **Email** | Resend | Transactional confirmations, itineraries, and invoices |
| **Rate Limiting** | Upstash Redis | Sliding window rate limiting on sensitive routes & auth |
| **Bot Protection** | Cloudflare Turnstile | Privacy-friendly CAPTCHA alternative |
| **Media & CDN** | Cloudinary & Cloudflare | Responsive images (WebP/AVIF), global CDN edge caching |
| **Monitoring** | Sentry | Performance tracing, exception tracking, real-user monitoring |
| **Testing** | Vitest, Playwright, k6 | Unit/integration, end-to-end browser tests, load testing |

---

## 3. Architecture Layers & Directory Isolation

```
src/
├── app/          # Routing & Entry Points (Layouts, Route Handlers, Error Boundaries)
├── components/   # Reusable UI primitives (Buttons, Containers, Navigation, Forms)
├── features/     # Feature-domain vertical slices (destinations, bookings, payments, etc.)
├── server/       # Privileged business layer (Services, Repositories, RBAC, Security)
├── lib/          # External infrastructure adapters (Supabase, Drizzle, Cashfree, Redis)
├── hooks/        # Shared React client hooks
├── providers/    # Client context providers
├── config/       # Environment schemas and platform constants
├── utils/        # Generic pure helper functions
└── types/        # Global platform-wide TypeScript definitions
```

### Layer Dependency Rules
1. **Client Boundary**: Files in `src/app/`, `src/components/`, `src/features/**/components/` that declare `'use client'` must NEVER import from `src/server/` or privileged files in `src/lib/`.
2. **Server-Only Boundary**: All files in `src/server/` and `src/lib/db/` declare `import 'server-only'` to guarantee secrets never leak into client JavaScript bundles.
3. **Data Access Isolation**: Route Handlers and Server Actions interact with the database exclusively through repositories and services in `src/server/`, never via raw ad-hoc queries inside UI components.

---

## 4. Performance & Rendering Strategy

- **Server Components by Default**: Public content, SEO metadata, and initial layout markup are rendered on the server, minimizing client JavaScript execution.
- **Incremental Static Regeneration (ISR)**: Destination detail pages, temple histories, and package overviews use ISR with sensible revalidation intervals (`revalidate = 3600`).
- **Dynamic Imports & Code Splitting**: Heavy client libraries (Three.js globe, GSAP animation controllers) are loaded via `next/dynamic` with `ssr: false` only when scrolled into view.
- **Modern Web Best Practices**:
  - CSS hardware-accelerated animations using `transform` and `opacity`.
  - Accessible reduced-motion media query handling across all animations.
  - Image optimization delivering next-gen AVIF/WebP formats with explicit aspect ratios.
