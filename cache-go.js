importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js");
workbox.setConfig({
    modulePathPrefix: '/assets/workbox/'
});
workbox.routing.registerRoute(
    new RegExp('.+\.(png|jpg|jpeg|svg|gif|ico)'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://i\.loli\.net/(.*)'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://ooo\.0o0\.ooo/(.*)'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://cdn\.jsdelivr\.net/(.*)'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    'https://cdn1.lncld.net/static/js/3.0.4/av-min.js',
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://fonts\.googleapis\.com/(.*)'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://fonts\.gstatic\.com/(.*)'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://us-api\.leancloud\.cn/(.*)'),
    new workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    new RegExp('.+\.html$'),
    new workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    new RegExp('.+loadjs\.min\.js'),
    new workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('.+main\.css'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('https://api\.n-a\.date/(.*)'),
    new workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    new RegExp('.+cache-go.js'),
    new workbox.strategies.networkFirst()
);
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});