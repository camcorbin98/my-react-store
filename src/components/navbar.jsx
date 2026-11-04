import "./navbar.css";

import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import GlobalContext from "../state/globalContext";

function Navbar() {

    // ACCESS GLOBAL STATE

    const { user, cart } = useContext(GlobalContext);

    // CALCULATE TOTAL NUMBER OF ITEMS IN CART

    const cartCount = cart.reduce((total, product) => {
        return total + Number(product.quantity);
    }, 0);

    // MOBILE MENU STATE

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

                        {/* ADMIN */}

                        <li className="nav-item">
                            <NavLink
                                to="/admin"
                                className={getLinkClass}
                                onClick={closeMenu}
                            >
                                Admin
                            </NavLink>
                        </li>

                    </ul>

                    {/* USER NAME FROM GLOBAL STATE */}

                    <span className="navbar-text ms-md-3 fw-semibold">
                        Welcome, {user.name}!
                    </span>

                </div>

                {/* SHOPPING CART */}

                <Link
                    to="/cart"
                    className="btn btn-outline-primary ms-4 d-flex align-items-center gap-2"
                    onClick={closeMenu}
                    aria-label={`View shopping cart with ${cartCount} items`}
                >

                    {/* SHOPPING CART ICON */}

                    <IconShoppingCart size={24} />

                    {/* CART ITEM COUNT */}

                    <span className="badge bg-primary text-white">
                        {cartCount}
                    </span>

                </Link>

            </div>

        </nav>
    );
}

export default Navbar;





