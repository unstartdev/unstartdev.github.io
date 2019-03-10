importScripts("https://n-a.date/assets/workbox/workbox-sw.js?v=4.1.0");
workbox.setConfig({
    modulePathPrefix: '/assets/workbox/'
});
workbox.routing.registerRoute(
    new RegExp('.+\.(png|jpg|jpeg|svg|gif|ico)'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://i\.loli\.net/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: maxEntries,
          }),
        ],
    })
);
workbox.routing.registerRoute(
    new RegExp('https://ooo\.0o0\.ooo/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: maxEntries,
          }),
        ],
    })
);
workbox.routing.registerRoute(
    new RegExp('https://cdn\.jsdelivr\.net/(.*)'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    'https://cdn1.lncld.net/static/js/3.0.4/av-min.js',
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://fonts\.googleapis\.com/(.*)'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://fonts\.gstatic\.com/(.*)'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://us-api\.leancloud\.cn/(.*)'),
    workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    new RegExp('.+\.html$'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    new RegExp('.+loadjs\.min\.js'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('.+main\.css'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('https://api\.n-a\.date/(.*)'),
    workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    new RegExp('.+cache-go.js'),
    workbox.strategies.networkFirst()
);
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});