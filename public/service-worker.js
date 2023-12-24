// Указываем имя кэша и список ресурсов для кэширования
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/'
];

// Установка Service Worker и кэширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Перехват запросов для работы в офлайн режиме
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Кэш найден - возвращаем ответ из кэша
        if (response) {
          return response;
        }
        // Если нет в кэше - делаем запрос к сети
        return fetch(event.request);
      }
    )
  );
});
self.addEventListener('push', event => {
    const data = event.data ? event.data.text() : 'No data';
    self.registration.showNotification('Test Notification', {
        body: data,
    });
});

// Активация Service Worker и очистка старого кэша
self.addEventListener('activate', event => {
  var cacheWhitelist = ['v1'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
