import React from 'react';
import Home from './pages/Home.js';
import { Router } from '@reach/router';
import './App.sass';

function App() {
  return (
    <>
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
}

export default App;
