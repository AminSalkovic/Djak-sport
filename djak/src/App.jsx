import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2';
import { Routes,Route, Link} from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    <>
       <Navbar/>
        <Header/>
       <Navbar2/> 
      
    </>
  );
}

export default App;