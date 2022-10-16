import './App.css'; 
import React from 'react'

const SignUp = () => {
  return (
    <div id='divSignUp'>
         <form className = 'SignUp'>
            <header> Sign Up</header>
            <div className= 'signlabels'>
            <label >User Name:
            <input name='username' type= 'text' />
            </label>
            <label >Password:
            <input name='password' type= 'password' />
            </label>
            <label >mail Id:
            <input name='password' type= 'email' />
            </label>
            <label >DateOfBirth:
            <input name='password' type= 'date' />
            </label>
            </div>
            <button id = 'signIn'> SignIn</button>
        </form>
    </div>
  )
}

export default SignUp