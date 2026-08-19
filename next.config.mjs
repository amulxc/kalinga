import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // react-pageflip and flipbook viewer use non-standard ESM fields Turbopack can't resolve
  transpilePackages: ['react-pageflip', 'react-pdf-flipbook-viewer'],
  turbopack: {
    root: __dirname, // prevent Turbopack from walking up to a parent package-lock.json
    resolveAlias: {
      // Use CJS build so Turbopack avoids motion-dom's ESM .mjs internal resolution bug
      'motion-dom': './node_modules/motion-dom/dist/cjs/index.js',
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.kalingauniversity.ac.in' },
      { protocol: 'https', hostname: 'kalinga-university.s3.amazonaws.com' },
      { protocol: 'https', hostname: 's3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
    qualities: [75, 100],
  },
  async redirects() {
    const redirectsPath = path.join(__dirname, 'redirects.json');
    let customRedirects = [];
    try {
      const redirectsData = fs.readFileSync(redirectsPath, 'utf8');
      customRedirects = JSON.parse(redirectsData);
    } catch (err) {
      console.error('Error reading redirects.json:', err);
    }

    return [
      // Single favicon: serve fav-icon-new.png for legacy favicon.ico requests
      { source: '/favicon.ico', destination: '/fav-icon-new.png', permanent: true },
      ...customRedirects.map(r => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent === undefined ? true : r.permanent
      })),
      // Map all .php URLs to non-.php URLs
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true,
      }
    ];
  },
  // Redirects and headers handled in middleware/next.config
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          {
            key: 'Content-Security-Policy',
            // ponytail: unsafe-inline required for GTM/GA/NPF inline scripts; still blocks object-src, base-uri, form-action attacks
            value: [
              "default-src 'self'",
              // unsafe-eval: React dev mode uses eval() for stack reconstruction; safe to drop in prod
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://track.nopaperforms.com https://challenges.cloudflare.com`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://cdn.kalingauniversity.ac.in https://kalinga-university.s3.amazonaws.com https://s3.ap-south-1.amazonaws.com https://flagcdn.com https://i.ytimg.com https://www.google-analytics.com https://www.googletagmanager.com",
              "connect-src 'self' https://api.kalingauniversity.ac.in https://maps.googleapis.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://track.nopaperforms.com",
              "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com https://www.googletagmanager.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.kalingauniversity.ac.in https://admissions.kalingauniversity.ac.in",
            ].join('; '),
          },
        ],
      },
      // API routes: never cache, no MIME sniffing on responses
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      // Long-lived caching is production-only: in dev these headers make the browser
      // hold on to stale HTML and chunks after an edit, so changes appear not to apply.
      ...(isDev
        ? [
            {
              source: '/(.*)',
              headers: [
                { key: 'Cache-Control', value: 'no-store, must-revalidate' },
                // Turbopack dev chunk URLs are path-derived, so they do NOT change when a
                // file's contents change. Any chunk a browser cached under the old
                // 'immutable' header would be served stale forever. This evicts it.
                // Safe to remove once every dev browser has loaded the page at least once.
                { key: 'Clear-Site-Data', value: '"cache"' },
              ],
            },
          ]
        : [
            // Pages: short CDN cache with stale-while-revalidate
            {
              source: '/((?!_next/|api/|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=60, s-maxage=60, stale-while-revalidate=86400',
                },
              ],
            },
            // Static assets: immutable, 1-year cache (fingerprinted by Next.js)
            {
              source: '/_next/static/(.*)',
              headers: [
                { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
              ],
            },
          ]),
      // Preconnect hints so the browser opens TCP/TLS to the API and CDN early
      {
        source: '/(.*)',
        headers: [
          { key: 'Link', value: '<https://api.kalingauniversity.ac.in>; rel=preconnect, <https://cdn.kalingauniversity.ac.in>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin' },
        ],
      },
    ];
  },
  // Use webpack explicitly for DOMMatrix polyfill support
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Inject DOMMatrix polyfill before any modules are evaluated
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        const polyfillPath = path.resolve(__dirname, 'polyfills/dommatrix.js');

        // Add polyfill to all entry points
        if (entries['main.js'] && !entries['main.js'].includes(polyfillPath)) {
          entries['main.js'].unshift(polyfillPath);
        }

        return entries;
      };
    }
    return config;
  },
  // We're using webpack for the DOMMatrix polyfill
  // Trigger reload again - bulk check - ver 2
};

export default nextConfig;


