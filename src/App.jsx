import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Videos from './pages/Videos.jsx';
import Contacts from './pages/Contacts.jsx';
import Logo from './logo.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav className="top-nav">
      <div className="nav-left">
      <img src={Logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App
