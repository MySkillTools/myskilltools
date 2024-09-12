import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/MySkillTools_Square.png';
import './Navbar.scss';

// Navbar Component
const Navbar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbar navbar-expand-sm no-padding pt-0 pb-0">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo */}
                <div className="d-flex align-items-center">
                    <img src={logo} style={{ maxHeight: '40px' }} alt="Logo" />&nbsp;
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
                        
                        {/* Home */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/' ? 'active' : ''}`} to="/">Home</Link>
                        </li>

                        {/* Dashboard */}
                        {/*
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/dashboard' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>
                        </li>
    *                   /}

                        {/* Skills */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/skills' ? 'active' : ''}`} to="/skills">Skills</Link>
                        </li>

                        {/* Templates */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/templates' ? 'active' : ''}`} to="/templates">Templates</Link>
                        </li>

                        {/* Jobs */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/jobs' ? 'active' : ''}`} to="/jobs">Jobs</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">

                        {/* New Application */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/new' ? 'active' : ''}`} to="/new">New Application</Link>
                        </li>


                        {/* Settings */}
                        <li className="nav-item navbar-border dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Settings
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#/profile">Profile</a>
                                <a className="dropdown-item" href="#/settings">Settings</a>
                                <a className="dropdown-item" href="#/logout">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;