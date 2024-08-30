import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/style.scss';

// Resources
import favicon from './assets/images/MSH_Square.png'

// Pages
import Home from './pages/Home/Home';

// Function to dynamically set favicon
const setFavicon = (faviconPath) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconPath;
    document.getElementsByTagName('head')[0].appendChild(link);
};

setFavicon(favicon);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>
);