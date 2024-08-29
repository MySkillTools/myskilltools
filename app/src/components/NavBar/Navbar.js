import React from 'react';
import { Link } from 'react-router-dom';
//import '../../styles/style.scss';
import './Navbar.scss';

// Navbar Component
const Navbar = () => {

    return (
        
        <nav className="navbar navbar-expand-md no-padding pt-0 pb-0">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">

                        
                        <li className="nav-item">
                            <Link className="nav-link navbar-border active" to="/">Home</Link>
                        </li>
                        
                     
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/about">About</Link>
                        </li>
                         {/* Home 
                    
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/myEvents">My Events</Link>
                        </li>

                       
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/admin">System Administration</Link>
                        </li>
                        */}
                    </ul>
                    
                    <ul className="navbar-nav ms-auto">
                        
                        {/* GitHub */}
                        <li className="nav-item">
                            <a className="nav-link navbar-border" href="https://github.com/stewebb/MSH" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Export both components
export default Navbar;
