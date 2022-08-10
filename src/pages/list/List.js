import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import '/node_modules/bootstrap/dist/css/bootstrap-grid.min.css.map';
import './list.css';

const List = () => {
    return (
        <div><Navbar />
        <Header type="list" /></div>
    )

}
export default List