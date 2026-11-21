# KovilGo API Standards & Specification

## 1. Architectural Conventions

All API endpoints in KovilGo follow the Next.js App Router Route Handler specification (`route.ts`).

- **Base Route**: `/api/...`
- **Format**: JSON (`Content-Type: application/json`)
- **Transport**: HTTPS with HSTS enforced

---

## 2. Standardized Response Envelope

Every API response follows a consistent contract:

### 2.1 Success Response (`2xx`)
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### 2.2 Error Response (`4xx` / `5xx`)
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Input validation failed",
    "details": {
      "phoneNumber": ["Please enter a valid 10-digit Indian mobile number"]
    }
  }
}
```

---

## 3. Standard Error Codes

| Code | HTTP Status | Description |
|---|---|---|
| `BAD_REQUEST` | 400 | Malformed syntax or non-parsable request |
| `UNAUTHORIZED` | 401 | Missing, expired, or invalid authentication session |
| `FORBIDDEN` | 403 | Authenticated user lacks required RBAC permissions |
| `NOT_FOUND` | 404 | Destination, package, or resource does not exist |
| `VALIDATION_ERROR` | 422 | Schema validation failure via Zod |
| `RATE_LIMIT_EXCEEDED`| 429 | Request quota surpassed |
| `INTERNAL_SERVER_ERROR`| 500 | Unhandled operational exception |
| `SERVICE_UNAVAILABLE`| 503 | Downstream gateway or service maintenance |

---

## 4. Input Validation Standard

All route handlers MUST parse incoming data through Zod:

```typescript
import { parseJsonBody, successResponse, errorResponse } from '@/server/security';
import { z } from 'zod';

const bookingSchema = z.object({
  packageId: z.string().uuid(),
  startDate: z.string().date(),
  guestCount: z.number().int().min(1).max(20),
});

export async function POST(request: Request) {
  try {
    const payload = await parseJsonBody(request, bookingSchema);
    // Execute business service...
    return successResponse(result, undefined, 201);
  } catch (err) {
    return errorResponse(err);
  }
}
```

---

## 5. Core Endpoints Overview

| Endpoint | Method | Auth | Description |
|---|---|---|---|
| `/api/health` | `GET` | Public | System status and service telemetry check |
| `/api/destinations` | `GET` | Public | Paginated listing of curated destinations |
| `/api/packages` | `GET` | Public | Travel packages and tour listings |
| `/api/quotations` | `POST` | Public + Turnstile | Custom itinerary estimation inquiry |
| `/api/bookings` | `POST` | Authenticated | Create a booking reservation |
| `/api/payments/cashfree/create-order` | `POST` | Authenticated | Initialize a Cashfree checkout session |
| `/api/webhooks/cashfree` | `POST` | Signature Verified | Cashfree payment webhook confirmation |
