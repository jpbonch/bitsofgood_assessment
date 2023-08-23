import './assets/App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import AdminLogin from './pages/AdminLogin';
import HeroInfo from './pages/HeroInfo';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/heroes" element={<Main />} />
        <Route path="/hero" element={<HeroInfo />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
