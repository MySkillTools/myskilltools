import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import SkillMenu from "../../components/SkillMenu/SkillMenu";
import SkillSearch from "../../components/SkillSearch/SkillSearch";
import SkillDetails from "../../components/SkillDetails/SkillDetails";

//import logo from '../../assets/images/MSH_Square.png';

const Home = () => {

    return (
        <div id="app">
            <Navbar />

            <div className="container-fluid">
                <h2 className="fw-bold fraunces-font p-2">My Skills</h2>
                <div className="row px-2">
                    
                    {/* Left: Search and Menu */}
                    <div className="col-xl-8">
                        <div className="mb-3">
                            <SkillSearch />
                        </div>
                        
                        <div className="mb-3">
                            <SkillMenu />
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="col-xl-4">
                        <SkillDetails />
                    </div>
                        
                    
                </div>   
            </div>

            <Footer />
            
            
        </div>
    )
}

export default Home;