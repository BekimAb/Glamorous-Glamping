import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer1 from "../../components/footer1/Footer1";
import "./cabin.css";
import image7 from '../../images/cabindeck.jpg'
import image8 from '../../images/cabinkitchen.jpg'
import image9 from '../../images/cabininside.jpg'
const Cabin = () => {
    return (
        <div><Navbar />
        <Header type="list"/>
        <div className="homeContainer">
        <h1 className="homeTitle">Check out our cabins!</h1>
        <div classname="cabinList">
        <img src={image7} alt="cabin4" className='featuredCabin' />
        <div classname="cabinList">
        <img src={image8} alt="cabin5" className='featuredCabin' />
        <div classname="cabinList">
        <img src={image9} alt="cabin6" className='featuredCabin' />
        </div>
        </div>
        </div>
            
            <Footer1/>
        </div>
        </div>
        );
};

export default Cabin