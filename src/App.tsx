import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { logger } from './common/logger/logger';

function App() {

  useEffect (() => {
    logger.log('Hello!');
    logger.warn('Careful there!');
    logger.error('Oh, no!');
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
