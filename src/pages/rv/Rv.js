import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer1 from "../../components/footer1/Footer1";
import "./rv.css";

const Rv = () => {
    return (
        <div><Navbar />
        <Header type="list"/>
        <div className="homeContainer">
        <h1 className="homeTitle">Check out our RVs!</h1>
           
            
            <Footer1/>
        </div>
        </div>
        );
};

export default Rv