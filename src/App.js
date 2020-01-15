import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home.js';
import { Router, Link } from '@reach/router';
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
