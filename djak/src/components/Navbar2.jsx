import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar2.css'

 const Navbar2 = () => {
  return (
    <div className='navbar2'>
      <ul className="navbar2-ul">
        <li className="nav2-items">
          <Link to='Novo' className='nav2-link'>Novo</Link>
        </li>
        <li className="nav2-items">
          <Link to='Trcanje' className='nav2-link'>Trcanje</Link>
        </li>
         <li className="nav2-items">
          <Link to='Sportovi' className='nav2-link'>Sportovi</Link>
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
          <Link to='Outlet' className='nav2-link'>Outlet</Link>
        </li>
      </ul>
    </div>
  )
}
 export default Navbar2;