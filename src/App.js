// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Component/Navbar1';
import Navbar2 from './Component/Navbar2';
import Navbar3 from './Component/Navbar3';

function App() {
  return (
    <div className="App">
      <h1>NAVBAR DEMO</h1>

      <h2> Navbar 1</h2>
      <Navbar />
      <h2>Navbar 2</h2>
      <Navbar2 />
      <h3>navbar 3</h3>
      <Navbar3 />

    </div>
  );
}

export default App;
