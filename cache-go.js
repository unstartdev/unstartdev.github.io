self.importScripts("https://n-a.date/assets/workbox-sw.js?v=4.00-rc3");
self.workbox.setConfig({
    modulePathPrefix: '/assets/workbox/'
});
self.workbox.routing.registerRoute(
    new RegExp('.+\.(png|jpg|jpeg|svg|gif|ico)'),
    self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://i\.loli\.net/(.*)'),
    self.workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: maxEntries,
          }),
        ],
    })
);
self.workbox.routing.registerRoute(
    new RegExp('https://ooo\.0o0\.ooo/(.*)'),
    self.workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: maxEntries,
          }),
        ],
    })
);
self.workbox.routing.registerRoute(
    new RegExp('https://cdn\.jsdelivr\.net/(.*)'),
    self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    'https://cdn1.lncld.net/static/js/3.0.4/av-min.js',
    self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://fonts\.googleapis\.com/(.*)'),
    self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://fonts\.gstatic\.com/(.*)'),
    self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://us-api\.leancloud\.cn/(.*)'),
    self.workbox.strategies.networkOnly()
);
self.workbox.routing.registerRoute(
    new RegExp('.+\.html$'),
    self.workbox.strategies.networkFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('.+loadjs\.min\.js'),
    self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('.+main\.css'),
    new self.workbox.strategies.StaleWhileRevalidate()
);
self.workbox.routing.registerRoute(
    new RegExp('https://api\.n-a\.date/(.*)'),
    self.workbox.strategies.networkOnly()
);
self.workbox.routing.registerRoute(
    new RegExp('.+cache-go.js'),
    self.workbox.strategies.networkFirst()
);
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});