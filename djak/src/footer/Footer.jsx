import React from 'react'
import DataFooter from './DataFooter'
import DataFooter2 from './DataFooter2'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
         <div className="div1">
            <div className="div1-image"></div>
         </div>
         <div className="div2">
                <h1>INFORMACIJE</h1>
            <ul className='footer-ul'>
                {DataFooter.map((items,index)=>{
                    return(
                        <li key={index} className={items.cName}>
                            <Link to={items.path}>
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
             </ul>
         </div>
         <div className="div3">
            <h1>KUPOVINA</h1>
             <ul className="footer-ul">
                {DataFooter2.map((items,index)=>{
                    return(
                        <li key={index} className={items.cName}>
                            <Link to={items.path}>
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
             </ul>
         </div>
         <div className="div4">
            <h1>KARIJERA</h1>
            <ul className='footer-ul'>
                <li className='footer-list'>
                    <Link to='nasi-zaposleni'>
                        <span>Nasi zaposleni</span>
                    </Link>
                </li>
                <li className='footer-list'>
                    <Link to='razvoj-karijere'>
                        <span>Razvoj karijere</span>
                    </Link>
                </li>
                <li className='footer-list'>
                    <Link to='zaposljavanje'>
                        <span>Zaposljavanje</span>
                    </Link>
                </li>
            </ul>
         </div>
         <div className="div5">
            <div className="drustvene-mreze">
                <div className="facebook"></div>
                <div className="instagram"></div>
                <div className="email"></div>
                <div className="linkedin"></div>
            </div>
            <div className="prijava">
                <div className="prijavise">
                </div>
            </div>
         </div>

    </div>
  )
}

export default Footer