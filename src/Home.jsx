import React from 'react'
import './App.css'; 
import {useNavigate} from 'react-router-dom';

const Home = () => {
  var navigate = useNavigate();

  const navigateToSignUp= () => {
    // 👇️ navigate to /signup
    navigate('/SignUp');
  };

  return (
    <div id= 'homeDiv'>
        <form className = 'Home'>
            <header> Home Page</header>
            <div className= 'labels'>
            <label >UserName:
            <input name='username' type= 'text' />
            </label>
            <label >Password: 
            <input name='password' type= 'encrypted' />
            </label>
            </div>
            <div className="buttons">
            <button  id = 'signIn'> SignIn</button>
            <button id = 'signUp' onClick={navigateToSignUp}> SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default Home