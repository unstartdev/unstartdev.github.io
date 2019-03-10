self.importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js");
self.workbox.setConfig({
    modulePathPrefix: '/assets/workbox/'
});
self.workbox.routing.registerRoute(
    new RegExp('.+\.(png|jpg|jpeg|svg|gif|ico)'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://i\.loli\.net/(.*)'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://ooo\.0o0\.ooo/(.*)'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://cdn\.jsdelivr\.net/(.*)'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    'https://cdn1.lncld.net/static/js/3.0.4/av-min.js',
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://fonts\.googleapis\.com/(.*)'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://fonts\.gstatic\.com/(.*)'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('https://us-api\.leancloud\.cn/(.*)'),
    new self.workbox.strategies.networkOnly()
);
self.workbox.routing.registerRoute(
    new RegExp('.+\.html$'),
    new self.workbox.strategies.networkFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('.+loadjs\.min\.js'),
    new self.workbox.strategies.cacheFirst()
);
self.workbox.routing.registerRoute(
    new RegExp('.+main\.css'),
    new self.workbox.strategies.StaleWhileRevalidate()
);
self.workbox.routing.registerRoute(
    new RegExp('https://api\.n-a\.date/(.*)'),
    new self.workbox.strategies.networkOnly()
);
self.workbox.routing.registerRoute(
    new RegExp('.+cache-go.js'),
    new self.workbox.strategies.networkFirst()
);
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});