import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import Dropdown from './Dropdown'

import './Navbar.css'

const Navbar = () => {
    const[dropdown,setDropdown]=useState(false)
  return (
    <>
    <nav className='navbar'>
         <ul className='navbar-ul'>
            <li className="nav-items">
                <Link to='/isporuka' className='nav-links'>
                  <RiIcons.RiTruckFill/>  
               <span className='span1'> BESPLATNA DOSTAVA ZA PORUDŽBINE PREKO 6000 DINARA</span>
                </Link>
            </li>
              <li className='nav-items' onClick={()=>setDropdown(!dropdown)}
              onMouseLeave={()=> setDropdown(false)}
              onMouseEnter={()=> {setDropdown(true)}}>
                
                <FaIcons.FaUserAlt/>
                  <span>Prijava</span>
                 {dropdown && <Dropdown/>}
              </li>
            <li className='nav-items'>
                <Link to='/Registracija' className='nav-links'>
                <GoIcons.GoPencil/>
                <span>  Registracija</span>
                </Link>
            </li>
            <li className="nav-items">
                <BsIcons.BsFillCartFill/>
             <span> Korpa</span>
            </li>
         </ul>
    </nav>
    </>
  )
}

export default Navbar