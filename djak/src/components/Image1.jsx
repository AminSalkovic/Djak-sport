import React from 'react'
import { Routes,Route, Link} from 'react-router-dom';
import Novo from '../pages/Novo';
import './Image1.css'

const Image1 = () => {
  return (
    <div className='image1'>
        <div className="image1-image">
         <Routes>
            <Route path={'/'} />
            <Route path={'/Novo'} element={<Novo/>}/>
         </Routes>
        </div>
        </div>
  )
}

export default Image1