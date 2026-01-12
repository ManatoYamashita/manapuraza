// Service Worker - Cache Strategy
const CACHE_NAME = 'manapuraza-v1';
const STATIC_CACHE = [
  '/',
  '/index.html',
  '/icon_white.webp',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache-first strategy for static assets
      if (response) {
        return response;
      }

      // Network-first for HTML/API
      return fetch(event.request).then((fetchResponse) => {
        // アセットファイルのみキャッシュに保存
        if (event.request.url.includes('/assets/')) {
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return fetchResponse;
      });
    })
  );
});

// 古いキャッシュのクリーンアップ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
