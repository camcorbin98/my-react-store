
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalProvider from "./state/globalProvider";

import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <GlobalProvider>

            <BrowserRouter>

                <div className="d-flex flex-column min-vh-100">

                    {/* NAVIGATION */}

                    <Navbar />

                    {/* PAGE ROUTING */}

                    <div className="flex-grow-1">

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>

                    </div>

                    {/* FOOTER */}

                    <Footer />

                </div>

            </BrowserRouter>

        </GlobalProvider>
    );
}

export default App;


