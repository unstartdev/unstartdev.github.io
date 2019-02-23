console.log("run");
importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js");
workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/g,
    workbox.strategies.cacheFirst()
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
)
workbox.routing.registerRoute(
    new RegExp('.+main\.css'),
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    new RegExp('https://api\.n-a\.date/(.*)'),
    workbox.strategies.networkOnly()
);