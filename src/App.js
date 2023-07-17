import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home'
import { Menu } from './pages/menu/menu'
import { Contact } from './pages/contact/contact'
import { About } from './pages/about/about'
import { Reserv } from './pages/reserv/reserv'
import { Footer } from './components/footer/footer'

const App = () => {
  return (
    <div className="App">

      <><Navbar /></>

      <Routes path="/Restaurant" element={Home}>
        <Route exact path='/Restaurant' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reserv' element={<Reserv />} />
      </Routes>

      <><Footer /></>
    </div>
  );
}

export default App;