import React from 'react';
import { Outlet } from 'react-router-dom';
import Address from '../Pages/Home/Address/Address';
import Footer from '../Pages/Share/Footer/Footer';
import Navbar from '../Pages/Share/Navabar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Address></Address>
            <Footer></Footer>
        </div>
    );
};

export default Main;