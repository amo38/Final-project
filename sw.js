const cacheName = 'mental_health_app';
const filesToCache = [
 './',
 './index.html',
 './share.html',
 './contact_us.html',
 './css/style.css',
 './js/main.js',
 './js/to_do.js',
 './js/contact_us.js'
];

// install service worker and cache offline content
self.addEventListener('install', (e) => {
    e.waitUntil(
    caches.open(cacheName).then((cache) => {
    return cache.addAll(filesToCache);
    })
    );
   });
   // take control of all fetch requests
   // serve cached content where possible
   self.addEventListener('fetch', (e) => {
    e.respondWith(
    caches.match(e.request).then((response) => {
    return response || fetch(e.request);
    })
    );
   });

