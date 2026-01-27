import React from 'react';
import Home from '../Home';
import Navbar from '../common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;