var staticCacheName = 'COVID-19_cache';
var contentToCache = [
  '/',
  'about/',
  'hospital/',
  'patient/',
  'virus/',
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(contentToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
      if ((requestUrl.pathname === '/')) {
        event.respondWith(caches.match('/'));
        return;
      }
    }
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});

// deal with push alert event
self.addEventListener('push', function(event) {
  var promise = self.registration.showNotification('Push notification!');

  event.waitUntil(promise);
});