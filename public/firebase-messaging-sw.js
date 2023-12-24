// Указываем имя кэша и список ресурсов для кэширования
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
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
