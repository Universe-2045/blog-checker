var CACHE = 'blma-checker-202605051423';
var FILES = [
  '/blog-checker/',
  '/blog-checker/index.html',
  '/blog-checker/manifest.json'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){return c.addAll(FILES)})
  );
});

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r || fetch(e.request);
    })
  );
});
