import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import Sportovidropdown from './Sportovidropdown'
import './Navbar2.css'

 const Navbar2 = () => {
  const[dropdown,setDropdown]=useState(false)


  return (
    <div className='navbar2'>
      <ul className="navbar2-ul">
        <li className="nav2-items">
          <Link to='Novo' className='nav2-link'>Novo</Link>
        </li>
        <li className="nav2-items">
          <Link to='Trcanje' className='nav2-link'>Trcanje</Link>
        </li>
         <li className="nav2-items"
         onMouseEnter={()=>setDropdown(true)}
         onMouseLeave={()=>setDropdown(false)}
         >
          <Link to='Sportovi' className='nav2-link'>Sportovi
          <AiIcons.AiOutlineCaretDown/>
          </Link>
          {dropdown && <Sportovidropdown/>}
        </li>
        <li className="nav2-items">
          <Link to='Muskarci' className='nav2-link'>Muskarci</Link>
        </li>
        <li className="nav2-items">
          <Link to='Zene' className='nav2-link'>Zene</Link>
        </li>
        <li className="nav2-items">
          <Link to='Deca' className='nav2-link'>Deca</Link>
        </li>
        <li className="nav2-items">
          <Link to='Oprema' className='nav2-link'>Oprema</Link>
        </li>
        <li className="nav2-items">
          <Link to='Nike' className='nav2-link'>Nike</Link>
        </li>
        <li className="nav2-items">
          <Link to='Djak&sport-kartica' className='nav2-link'>Djak & Spot kartica</Link>
        </li>
        <li className="outlet-items" >
          <Link to='/' className='nav2-link'>Outlet</Link>
        </li>
      </ul>
    </div>
  )
}
 export default Navbar2;