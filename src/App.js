import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To Cyber Times
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCB3k84Q_u-Ehq93W9PiCFWw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Youtube Channel
        </a>
      </header>
  );
}

export default App;
