import React,{useEffect,useState} from 'react'
import './Kard.css'
import Axios from 'axios'

export default function Kard(props) {
   const[data,setData]=useState([])
   let search=''
  const getData=(user)=>{
    Axios.get(`https://api.github.com/users/${user}`)
    .then((res)=> {setData([res.data])}).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getData()
  },[])


  
  return (
    <div className='kard'>
       <input type="text"  onChange={(e)=>{search=e.target.value}}/>
       <button onClick={()=>{getData(search)}}>submit</button>
       {data.map((el)=>{
        return(
          <div className="div">
              <h1>{el.name}</h1>
              <h1>{el.followers}</h1>
          </div>
        );
       })}
    </div>
  )
}
