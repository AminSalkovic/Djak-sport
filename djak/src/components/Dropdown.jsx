import React, { useState } from 'react';
import  MenuItems  from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);



  return (
    <div className='dropdown'>
             <h1>ULOGUJ SE</h1>
             <form >
              <input type="email" placeholder='Email'/>
              <input type="password" placeholder='Lozinka' />
             </form>
             <button type='submit'>LOGIN</button>
    </div>
  );
}

export default Dropdown;