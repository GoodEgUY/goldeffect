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
console.log("apply")

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
