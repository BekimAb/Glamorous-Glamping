import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer1 from "../../components/footer1/Footer1";
import "./tent.css";
import image4 from '../../images/insidetent.jpg'
import image5 from '../../images/laketent.jpg'
import image6 from '../../images/projectortent.jpg'

const Tent = () => {
    return (
        <div><Navbar />
        <Header type="list"/>
        <div className="homeContainer">
        <h1 className="homeTitle">Check out our tents!</h1>
        <div classname="tentList">
        <img src={image4} alt="tent4" className='featuredTent' />
        <div classname="tentList">
        <img src={image5} alt="tent5" className='featuredTent' />
        <div classname="tentList">
        <img src={image6} alt="tent6" className='featuredTent' />
        </div>
        </div>
        </div>
           
            
            <Footer1/>
        </div>
        </div>
        );
};

export default Tent