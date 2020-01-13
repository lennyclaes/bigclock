self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('bigclock').then(function(cache) {
        return cache.addAll([
            '/bigclock/',
            '/bigclock/index.html',
            '/bigclock/css/style.css',
            '/bigclock/js/app.js',
            '/bigclock/img/clock.png'
        ]);
      })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});