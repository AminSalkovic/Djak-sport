
import React,{useState}from 'react'
import './Header.css'

export default function Header() {

  return (
    <div className='header'>
        <div className="headerslika"></div>
        <div className='forma'>
            <form>
                <input type="search"  placeholder='Pretraga'/>
            </form>
                 <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="call">
        <i class="fa-solid fa-square-phone"></i>
       <h1>CALL CENTAR <br /> 0800 100 505 </h1>
        </div>


    </div>
  )
}
