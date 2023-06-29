import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home'

function App() {
  return (
    <div className="App">
      <><Navbar /></>
      <><Home /></>
      <Routes>
        <Route path='/' />
        <Route path='/' />
      </Routes>
    </div>
  );
}

export default App;