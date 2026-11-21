# KovilGo Security Architecture & Baseline

## 1. Security Philosophy & Scope

This document details the baseline security architecture established in Phase 0 for **KovilGo**. 

> **Important Security Notice:** This baseline implements defensive engineering best practices and principle of least privilege. It does **not** constitute a completed penetration test or guarantee absolute invulnerability. Security is an active, ongoing operational discipline.

---

## 2. Security Boundaries & Invariants

### 2.1 Server-Only Boundary
Privileged modules handling database connections, service-role tokens, payment gateway credentials, or SMS keys must explicitly import `server-only`:

```typescript
import 'server-only';
```

If any client component or browser bundle inadvertently imports a server-only module, Next.js build compilation halts immediately with an error.

### 2.2 Credential Isolation
- **Public Client Credentials**: Only variables prefixed with `NEXT_PUBLIC_` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_APP_URL`) may be exposed to the browser.
- **Service Role Secret**: `SUPABASE_SERVICE_ROLE_KEY` bypasses PostgreSQL Row Level Security (RLS). It is restricted exclusively to `src/lib/supabase/admin.ts` and background cron/webhook handlers.
- **Database Connection Strings**: Direct PostgreSQL connection credentials are never committed, logged, or exposed over client-facing endpoints.

---

## 3. HTTP Security Headers & Content Security Policy (CSP)

Configured in `next.config.ts` for all route responses:

| Header | Value | Protection |
|---|---|---|
| `Content-Security-Policy` | Strict directive whitelisting Cloudflare, Supabase, Cloudinary | Cross-Site Scripting (XSS), Clickjacking |
| `X-Frame-Options` | `DENY` | Clickjacking / iframe embedding |
| `X-Content-Type-Options` | `nosniff` | MIME-type sniffing attacks |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Referrer leakage of sensitive URLs |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Unauthorized device API access |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Downgrade attacks / SSL stripping |
| `X-DNS-Prefetch-Control` | `on` | Secure and fast DNS prefetching |

---

## 4. Input Validation & Injection Defense

1. **SQL Injection Defense**: Drizzle ORM uses parameterized SQL queries exclusively. Raw unescaped string concatenation is strictly banned across all repositories.
2. **Strict Request Validation**: Every API Route Handler and Server Action validates incoming payloads using Zod schemas (`src/server/security/validate.ts`). Unrecognized fields are rejected or stripped.
3. **Cross-Site Scripting (XSS)**: React 19 / Next.js auto-escapes rendered text. `dangerouslySetInnerHTML` is prohibited unless explicitly reviewed for sanitized markdown content.

---

## 5. Sanitized Logging & PII Protection

Logs are passed through `src/server/security/logger.ts` which automatically redacts:
- Passwords and PINs
- SMS OTPs
- Bearer tokens and session secrets
- Payment card data, CVVs, and Cashfree signatures

---

## 6. Rate Limiting & Bot Protection

- Public enquiry forms, auth routes, and payment initialization endpoints are gated by sliding-window rate limiters backed by Upstash Redis.
- Public submission forms are protected by Cloudflare Turnstile bot verification.
