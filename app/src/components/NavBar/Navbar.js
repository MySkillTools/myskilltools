import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/images/MSH_Wide.png';

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm no-padding pt-0 pb-0">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo */}
                <div className="d-flex align-items-center">
                    <img src={logo} style={{ maxHeight: '40px' }} alt="Logo" />
                </div>

                {/* Navbar Toggler */}
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item px-1">
                            <Link className="nav-link navbar-border active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/about">About</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link navbar-border" href="https://github.com/stewebb/MSH" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Export the Navbar component
export default Navbar;