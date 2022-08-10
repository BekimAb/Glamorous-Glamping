import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer1 from "../../components/footer1/Footer1";
import "./rv.css";
import image10 from '../../images/rvhammock.jpg'
import image11 from '../../images/rvdeck.jpg'
import image12 from '../../images/insiderv.jpg'

const Rv = () => {
    return (
        <div><Navbar />
        <Header type="list"/>
        <div className="homeContainer">
        <h1 className="homeTitle">Check out our RVs!</h1>
        <div classname="rvList">
        <img src={image10} alt="rv4" className='featuredRv' />
        <div classname="rvList">
        <img src={image11} alt="rv5" className='featuredRv' />
        <div classname="rvList">
        <img src={image12} alt="rv6" className='featuredRv' />
        </div>
        </div>
        </div>
            
            <Footer1/>
        </div>
        </div>
        );
};

export default Rv