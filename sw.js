// sw.js — Service Worker mínimo para Mapa 3D
// Precachea el esqueleto de la app para que abra sin red.

const CACHE = 'app-shell-v1';
const SHELL = [
  './',
  './index.html',
  './maplibre-gl.js',
  './maplibre-gl.css',
  './three.min.js',
  './jszip.min.js',
  './pmtiles.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const u = new URL(req.url);
  if (u.origin !== location.origin) return; // CDN, teselas OSM, OSRM, APIs → sin tocar

  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match(req).then(hit => hit || caches.match('./index.html').then(h2 => h2 || fetch(req)))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && r.ok) {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(req, clone)).catch(() => {});
      }
      return r;
    }).catch(() => caches.match(req)))
  );
});