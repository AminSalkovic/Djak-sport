import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2';
import { Routes,Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Image1 from './components/Image1';
import Footer from './footer/Footer';



function App() {
  return (
    <>
       <Navbar/>
        <Header/>
       <Navbar2/> 
       <Image1/>
       <Footer/>
    </>
  );
}

export default App;