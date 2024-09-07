import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

import logo from '../../assets/images/MSH_Square.png';

const Home = () => {

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className="row mb-3">
                    <Hero 
                        logo={logo} 
                        title='My Skill Highlighter'
                        description='Unlock job potential: Extract keywords effortlessly.'
                        link='highlighter'
                    />
                </div> 
            </div>

            <div className="container">
                <div className="row">
                        <Features />
                </div>  
            </div>
            
            
        </div>
    )
}

export default Home;