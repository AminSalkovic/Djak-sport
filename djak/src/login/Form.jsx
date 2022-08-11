import React,{useState} from 'react'
import Formsignup from './Formsignup'
import Formsucces from './Formsucces'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  function submitForm(){
    setIsSubmitted(true)
  }
  return (
    <div>
      
    {isSubmitted ? <Formsignup submitForm={submitForm}/>:<Formsucces/>}

    </div>
  )
}

export default Form