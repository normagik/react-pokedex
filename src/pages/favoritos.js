import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Favoritos = ()=> {
    const[isOpen, setIsOpen] = useState (false);
    const toggle= () => {

        setIsOpen(!isOpen)
    };
    return(
    <>
    <Navbar toggle={toggle}  />
    <Sidebar isOpen={isOpen} toggle={toggle}  />
    <Footer />
    </>
    );
};

export default Favoritos;
