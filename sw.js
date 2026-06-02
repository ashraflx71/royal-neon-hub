const CACHE_NAME = 'royal-neon-v1';
const ASSETS = [
  '/index.html',
  '/manifest.json'
];

// تثبيت عامل الخدمة وتخزين الملفات الأساسية
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// استدعاء الملفات من الكاش لسرعة خارقة (بكسر من الثانية)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
