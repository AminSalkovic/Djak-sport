import React from 'react'
import {Link} from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
       <div className="image"> </div>
      </Link>
       <div className='search-input'>
       <input type='text' placeholder='Pretraga' />
       <FiIcons.FiSearch className='icon'/>
       </div>

        <BsIcons.BsFillTelephoneFill className='icon2'/>
       <div className="call">
        <p>CALL CENTAR</p>
       <h1>  0800 100 505</h1>
       </div>
    </div>
  )
}

export default Header;