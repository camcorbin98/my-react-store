
import "./navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    // TOGGLE MOBILE MENU

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    // CLOSE MOBILE MENU

    function closeMenu() {
        setMenuOpen(false);
    }

    // HIGHLIGHT ACTIVE PAGE

    function getLinkClass({ isActive }) {
        return isActive ? "nav-link active fw-bold" : "nav-link";
    }

    return (
        <nav className="navbar navbar-expand-md store-navbar">

            <div className="container-fluid">

                {/* STORE BRAND */}

                <NavLink
                    className="navbar-brand"
                    to="/"
                    onClick={closeMenu}
                >
                    My React Store
                </NavLink>

                {/* MOBILE MENU BUTTON */}

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

                {/* NAVIGATION LINKS */}

                <div
                    className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                    id="navbarMenu"
                >
                    <ul className="navbar-nav ms-auto">

                        {/* HOME */}

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={getLinkClass}
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                        </li>

                        {/* CATALOG */}

                        <li className="nav-item">
                            <NavLink
                                to="/catalog"
                                className={getLinkClass}
                                onClick={closeMenu}
                            >
                                Catalog
                            </NavLink>
                        </li>

                        {/* ABOUT */}

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={getLinkClass}
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                        </li>

                        {/* CONTACT */}

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={getLinkClass}
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;



