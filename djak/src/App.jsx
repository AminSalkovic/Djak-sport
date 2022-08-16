import React from 'react';
import './App.css';
import Navbar from './sidebar/Navbar';
import { Routes,Route, Link} from 'react-router-dom';
import Home from './sidebar/Home';
import Reports from './sidebar/Reports';
import Products from './sidebar/Products';
import Kard from './components/Kard';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route to='/kard' element={<Kard/>}/>
        <Route to='/reports' element={<Reports/>}/>
        <Route to='/products' element={<Products/>}/>
      </Routes>
      <h1><Link to='/kard'>amin</Link></h1>
    </>
  );
}

export default App;