import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import PoweredBy from "../../components/PoweredBy/PoweredBy";

import './Home.scss';

//import logo from '../../assets/images/MSH_Square.png';

const Home = () => {

    return (
        <div>
            <Navbar />

            {/*
            <div className='container-fluid'>
                <div className="mb-3">
                    <Hero 
                        logo={logo} 
                        title='My Skill Highlighter'
                        description='Unlock job potential: Extract keywords effortlessly.'
                        link='highlighter'
                    />
                </div> 
            </div>

            <div className="container">
                <div className="mb-3">
                    <Features />
                </div>     
            </div>

            <div className='container-fluid about'>
                <div className="container mb-3">
                    <About />
                </div>  
            </div>

            <div className="container">
                <div className="mb-3">
                    <PoweredBy />
                </div>     
            </div>
            */}

            
        </div>
    )
}

export default Home;