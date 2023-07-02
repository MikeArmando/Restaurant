import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home'
import { Menu } from './pages/menu/menu'
import { Footer } from './components/footer/footer'

function App() {
  return (
    <div className="App">

      <><Navbar /></>
      
      <Routes path="/Mariscos-Bahia" element={Home}>
        <Route exact path='/Mariscos-Bahia' element={<Home />} />
        <Route path='/menu' element={Menu} />
      </Routes>

      <><Footer /></>
    </div>
  );
}

export default App;