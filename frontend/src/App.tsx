import './assets/App.css';
import { useState, useEffect, createContext } from 'react';
import Main from './pages/Main';
import useHeroes from './hooks/useHeroes';

function App() {

  return (
    <div className="App">
      <h1>HaHa Heroes</h1>
      <Main></Main>
    </div>
  );
}

export default App;
