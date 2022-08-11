import React from 'react'

const Formsignup = () => {
  return (
    <div className="form-content-right">
        <form className="form">
            <div className="form-inputs">
                <label htmlFor="username" className="form-label">
                    <input type="text" name='username' className="form-input" placeholder='Eneter your username' />
                </label>
            </div>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                    <input type="email" name='email' className="form-input" placeholder='Eneter your email' />
                </label>
            </div>
        </form>
    </div>
  )
}

export default Formsignup