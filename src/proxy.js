import { NextResponse } from "next/server";

// ponytail: in-memory rate limit — works for single Node.js process; swap to Redis/Upstash if multi-instance
const ipRequests = new Map();
const API_WINDOW_MS = 60_000;
const API_LIMIT = 30; // requests per minute per IP on /api routes

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + API_WINDOW_MS });
    return false;
  }
  if (entry.count >= API_LIMIT) return true;
  entry.count++;
  return false;
}

let pruneCounter = 0;
function maybePrune() {
  if (++pruneCounter < 500) return;
  pruneCounter = 0;
  const now = Date.now();
  for (const [key, val] of ipRequests) {
    if (now > val.resetAt) ipRequests.delete(key);
  }
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (pathname.startsWith("/api/")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    maybePrune();

    if (isRateLimited(ip)) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: { "Retry-After": "60" },
      });
    }
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
