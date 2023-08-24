import './assets/App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import AdminLogin from './pages/AdminLogin';
import HeroInfo from './pages/HeroInfo';
import { useState } from 'react';


function App() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        <Route path="/heroes" element={<Main isAdmin={isAdmin} />} />
        <Route path="/hero/:id" element={<HeroInfo isAdmin={isAdmin} />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
