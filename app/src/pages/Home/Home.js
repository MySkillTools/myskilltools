import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import About from "../../About/About";

import logo from '../../assets/images/MSH_Square.png';

const Home = () => {

    return (
        <div>
            <Navbar />

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

                <div className="mb-3">
                    <About />
                </div>  
            </div>
            
            
        </div>
    )
}

export default Home;