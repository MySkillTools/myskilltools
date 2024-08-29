import React from 'react';
import { Link } from 'react-router-dom';
//import '../../styles/style.scss';
import './Navbar.scss';

//import '@fortawesome/fontawesome-free/css/all.min.css'
//import institution_logo from '../../assets/images/test_uni_logo.png';

// SuperHeader Component
/*
const SuperHeader = () => {
    return (
        <header className="bg-white super-header">
            <div className="container-fluid" style={{ paddingTop: '5px', paddingBottom: '5px'}}>
                <div className="d-flex justify-content-between align-items-center">
                    <a href="#">
                        <img src={institution_logo} alt="Institution Logo" style={{ height: '50px' }} />
                    </a>
                    <h5 className="mb-0 fw-bold">Event Management Platform</h5>
                </div>
            </div>
        </header>
    );
};
*/

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
                        
                      {/* Home 
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/myOrganizations">My Organizations</Link>
                        </li>
                        
                    
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/myEvents">My Events</Link>
                        </li>

                       
                        <li className="nav-item">
                            <Link className="nav-link navbar-border" to="/admin">System Administration</Link>
                        </li>
                        */}
                    </ul>
                    
                    <ul className="navbar-nav ms-auto">

                      
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Export both components
export default Navbar;
