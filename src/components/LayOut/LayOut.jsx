import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return (
    <>
    <div className="container">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default LayOut;
