import React from 'react';
import  './login.css'

const Login = () => {
  return (
    <div className='login-page'>
      <div className="loginform">
        <form className='login-form'>
          <h6>Login To PTC India Limited</h6>
        <input type='text' className='text-box'/>
        <input type='text' className='text-box'/>
       
        <a href="#">Forget Password</a>
        
        <input type='button' value="Login" className='btns'/>
        </form>
      </div>
    </div>
  );
}

export default Login;
