import React,{useState}from 'react'
import './Preheader.css'


export default function Preheader() {
  const [prijava, setPrijava] = useState(false)

  return (
    <div className="pre-header">
      <div className="slika1"></div>
         <ul>
          <li ><i class="fa-solid fa-truck"></i>BESPLATNA DOSTAVA ZA PORUDŽBINE PREKO 6000 DINARA</li>
        </ul>
        <ul>
           <li onClick={()=>{setPrijava(!prijava)}} style={{marginLeft:"300px"}}><i class="fa-solid fa-user"></i>PRIJAVA</li>
          <li><i class="fa-solid fa-pencil"></i>REGISTRACIJA</li>
          <li><i class="fa-solid fa-cart-shopping"></i>KORPA</li>
         </ul>
   {prijava && <h1>sas</h1>}
    </div>
       
  )
}
