import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Хорошего времени суток тебе, пользователь!
        </p>
        <a
          className="App-link"
          href="https://vk.com/although_fine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Создатель
        </a>
      </header>
    </div>
  );
}

export default App;
