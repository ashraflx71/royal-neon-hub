const CACHE_NAME = 'royal-neon-v1';
const ASSETS = [
  '/index.html',
  '/manifest.json'
];

// تثبيت الكاش عند التشغيل الأول لضمان الكفاءة العالية
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// استرجاع الملفات بسرعة خارقة حتى عند انقطاع الشبكة
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
