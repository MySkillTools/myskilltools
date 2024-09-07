import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/MSH_Square.png';

const Hero = () => {
    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-white'>
                <div className='text-center mb-3'>
                    <img src={logo} style={{maxWidth: '150px'}} />
                </div>

                <div className='text-center mb-1'>
                    <h2 className='text-dark fw-bold fraunces-font'>My Skill Highlighter</h2>
                </div>

                <div className='text-center mb-3'>
                    <span className='text-secondary fw-bold fs-4 fst-italic'>Unlock job potential: extract keywords effortlessly.</span>
                </div>

                <div className='text-center'>
                    <Link className='btn btn-outline-primary' to="/highlighter">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
