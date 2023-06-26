import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>      
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
