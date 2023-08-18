import './assets/App.css';
import { useState, useEffect } from 'react';
import Main from './pages/Main';

function App() {
  const [heroData, setHeroData] = useState({}) 

  return (
    <div className="App">
      <h1>HaHa Heroes</h1>
      <Main></Main>
    </div>
  );
}

export default App;
