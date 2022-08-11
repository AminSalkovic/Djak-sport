import React from 'react'

export default function ValidateInfo(values) {
    let errors={};
  if(!values.username.trim()){
    errors.username=' Username is required'
  }

  if(!values.email){
    errors.email='email address is invalid'
  }

  if(!values.password){
    errors.password=' Password is required'
  }else if(values.password.length <6){
    errors.password='Password needs to be 6 characters or more'
  }

  if(!values.password2){
    errors.password2='Password is required'
  }else if(values.password2 !== values.password){
    errors.password2="Password do not match"
  }
  return errors
}
