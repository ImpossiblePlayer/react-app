import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Мой первый проект на React
        </p>
        <a
          className="App-link"
          href="https://github.com/impossibleplayer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Мой профиль GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
