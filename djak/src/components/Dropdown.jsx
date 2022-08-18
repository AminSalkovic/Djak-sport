import React, { useState } from 'react';
import  MenuItems  from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {

  return (
    <div className='dropdown'>
             <h1>ULOGUJ SE</h1>
             <form >
              <input type="email" placeholder='Email'/>
              <input type="password" placeholder='Lozinka' />
             </form>
               <li className='drop-list'>
                  <Link to='/zaboravljena-sifra' className='dropdown-link'>
                       Zaboravili ste lozinku?  
                  </Link>
               </li>
             <button type='submit'>LOGIN</button>
    </div>
  );
}

export default Dropdown;