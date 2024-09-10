import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import SkillMenu from "../../components/SkillMenu/SkillMenu";

//import logo from '../../assets/images/MSH_Square.png';

const Home = () => {

    return (
        <div id="app">
            <Navbar />

            <div className="container-fluid">
                <SkillMenu />
            </div>

            <Footer />
            
            
        </div>
    )
}

export default Home;