import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a Estudio Color!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/estudiocolor/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuestro Instagram!
        </a>
      </header>
    </div>
  );
}

export default App;
