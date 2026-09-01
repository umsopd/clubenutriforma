self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nutri-admin-v1').then((cache) => {
      return cache.addAll(['./', './admin.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
