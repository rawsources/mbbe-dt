/* Lets the app open from the home screen, even with no signal. Always tries the internet first. */
var CACHE = 'mbbe-discipleship-v1';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || r.mode !== 'navigate') return;
  e.respondWith(fetch(r).then(function (res) {
    if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put('./', copy); }); }
    return res;
  }).catch(function () { return caches.open(CACHE).then(function (c) { return c.match('./'); }); }));
});
