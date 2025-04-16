self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("acpsc-cache").then(cache => {
      return cache.addAll(["index.html", "manifest.json", "robots.txt"]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});