import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import About from './pages/about';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import Navbar from './components/navbar';
import Footer from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <BrowserRouter>
            
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

export default App

