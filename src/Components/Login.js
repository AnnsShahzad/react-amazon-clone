import React, { useState } from 'react';
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const signIn = (e) =>
  {
    e.preventDefault();
    auth 
      .signInWithEmailAndPassword(email,password)
      .then(auth => {
        navigate('/');
      })
      .catch(error => alert(error.message))
  }

  const register = (e) =>
  {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        
        if (auth)
        {
          navigate('/');
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>

      
      <div className='login__container'>
        <form>

          <h5>E-Mail</h5>
          <input type='text' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)}></input>

          <h5>Password</h5>
          <input type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='login__singInButton'>Sign In</button>

        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazone Account</button>
        
      </div>
    </div>
  )
}

export default Login;
