importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyD6S2EXkCINnLaWdTSyuk4IKRNckSHutRo",
    authDomain: "test-83bd7.firebaseapp.com",
    projectId: "test-83bd7",
    storageBucket: "test-83bd7.appspot.com",
    messagingSenderId: "901694726007",
    appId: "1:901694726007:web:ec8b45542d93d098a9cb72",
});

const messaging = firebase.messaging();

// Обработка уведомлений в фоновом режиме
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Кастомизируйте здесь данные и параметры уведомления
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
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
