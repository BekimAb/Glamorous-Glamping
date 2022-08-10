import Footer1 from "../../components/footer1/Footer1";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
    return (
        <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
            <Featured/>
            
            <Footer1/>
        </div>
        </div>
    );
};

export default Home;