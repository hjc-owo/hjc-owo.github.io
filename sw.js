const CACHE_NAME = "academic-site-v1";
const urlsToCache = [
  "/",
  "/assets/css/main.css",
  "/assets/js/main.min.js",
  "/assets/css/academicons.css",
  // Add other important resources
];

// Install Service Worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept network requests
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Return cached version if found
      if (response) {
        return response;
      }

      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone the response
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          // Only cache GET requests
          if (event.request.method === "GET") {
            cache.put(event.request, responseToCache);
          }
        });

        return response;
      });
    })
  );
});

// Update Service Worker
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
