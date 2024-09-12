import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import SkillMenu from "../../components/SkillMenu/SkillMenu";
import SkillSearch
 from "../../components/SkillSearch/SkillSearch";
//import logo from '../../assets/images/MSH_Square.png';

const Home = () => {

    return (
        <div id="app">
            <Navbar />

            <div className="container-fluid">
                <h2 className="fw-bold fraunces-font p-2">My Skills</h2>

                <div className="row">
                    
                </div>

                <div className="row px-3">

                    

                    
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <SkillSearch />
                        </div>
                        
                        <SkillMenu />
                        </div>
                        
                    
                </div>   
            </div>

            <Footer />
            
            
        </div>
    )
}

export default Home;