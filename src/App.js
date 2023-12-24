import './App.css';
import Main from './components/Main/Main';

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration) {
        console.log('Service Worker Registered', registration);
    })
    .catch(function(error) {
        console.log('Service Worker Registration failed', error);
    });
}
if (Notification.permission === 'default') {
  Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
          console.log('Разрешение на отправку уведомлений получено');
      } else {
          console.log('Разрешение на отправку уведомлений отклонено');
      }
  });
}

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
