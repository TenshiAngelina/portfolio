import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';
// console.log(database.pages[0].projects);

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navigation/>
    {/* <Header/> */}
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
