# KovilGo Deployment Guide

## 1. Hosting Architecture Overview

KovilGo is architected for deployment on **Vercel** fronted by **Cloudflare** for DNS, CDN caching, and edge DDoS protection, with backend data stored in **Supabase PostgreSQL**.

```
Internet Request
       │
       ▼
Cloudflare CDN / DNS (SSL/TLS Strict, Edge Caching, WAF, Turnstile)
       │
       ▼
Vercel Edge & Serverless Functions (Next.js App Router, SSR, Route Handlers)
       │
       ├──────────────► Supabase (PgBouncer Pooler Port 6543)
       ├──────────────► Upstash Redis (Sliding-window rate limiting)
       ├──────────────► Cloudinary CDN (Media & Image delivery)
       ├──────────────► Cashfree (Payment gateway APIs)
       └──────────────► Sentry (Real-time telemetry & error reporting)
```

---

## 2. Vercel Project Setup

1. Link the repository to your Vercel organization.
2. Select Framework Preset: **Next.js**.
3. Build Command: `npm run build`
4. Output Directory: `.next`
5. Install Command: `npm ci`

---

## 3. Production Environment Checklist

Configure the following variables in the Vercel Project Settings (Production & Preview):

| Variable | Target Environment | Scope |
|---|---|---|
| `NODE_ENV` | Production | System |
| `NEXT_PUBLIC_APP_URL` | `https://kovilgo.com` | Client & Server |
| `NEXT_PUBLIC_SUPABASE_URL` | Production Supabase URL | Client & Server |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production Supabase Anon Key | Client & Server |
| `SUPABASE_SERVICE_ROLE_KEY` | Production Supabase Service Key | **Server Only** |
| `DATABASE_URL` | Supabase Pooler (`6543`, `sslmode=require`) | **Server Only** |
| `DIRECT_URL` | Supabase Direct (`5432`, `sslmode=require`) | **Server Only** |
| `CASHFREE_APP_ID` | Production Cashfree App ID | **Server Only** |
| `CASHFREE_SECRET_KEY` | Production Cashfree Secret Key | **Server Only** |
| `CASHFREE_ENVIRONMENT` | `PRODUCTION` | **Server Only** |
| `MSG91_AUTH_KEY` | MSG91 Live Auth Key | **Server Only** |
| `RESEND_API_KEY` | Live Resend API Key | **Server Only** |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL | **Server Only** |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST Token | **Server Only** |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile Site Key | Client & Server |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile Secret Key | **Server Only** |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`| Cloudinary Cloud Name | Client & Server |
| `CLOUDINARY_API_KEY` | Cloudinary API Key | **Server Only** |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret | **Server Only** |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry DSN | Client & Server |

---

## 4. Cloudflare DNS & Security Settings

1. **SSL/TLS Encryption Mode**: Set to `Full (strict)`.
2. **Always Use HTTPS**: Enabled.
3. **HTTP Strict Transport Security (HSTS)**: Max-age 63072000 (2 years), include subdomains, preload.
4. **Minimum TLS Version**: `TLS 1.3` (or `TLS 1.2` minimum).
5. **Security Level**: `Medium` with Turnstile challenge integration for high-risk IPs.
