import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Routes,Route, Link} from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    <>
       <Navbar/>
        <Header/>
      
    </>
  );
}

export default App;