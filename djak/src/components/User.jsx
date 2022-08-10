import React,{useState,useEffect} from 'react'
import Axios from 'axios'
export default function User() {
    const[data,setData]=useState(null)
    let value=''
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/todos")
       .then((res)=> {
         setData(res.data)
        console.log(res.data)
    })
    },[])
  return (
    <div>
          {data&& data.map((el)=>{
            return(
                <div>
                    <p key={el[1].id}>{el.title}</p>
                </div>
            )
          })}
    </div>
  )
}
