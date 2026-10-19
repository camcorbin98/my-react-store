
import "./navbar.css";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar navbar-expand-md bg-light border-bottom">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    My React Store
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarMenu"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                    id="navbarMenu"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">

                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                href="#"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#catalog"
                                onClick={() => setMenuOpen(false)}
                            >
                                Products
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;

