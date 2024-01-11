import React from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div className='container'>
      <div className="grid">
        <div className="panel">
          <h4>"Los récords están para ser superados"</h4>
          <div className='imgContainer'>
            <img src="../assets/karate.png" alt="imagen" />
          </div>
        </div>
        <Card />
      </div>
    </div>
  )
}

export default App;
