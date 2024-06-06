import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';
import axios from 'axios';

const Loginpage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  function HandleSubmit(event) {
    event.preventDefault();
    if (password.length < 8) {
      setPasswordError("password must be 8 letter");
    } else  {
      setPasswordError(" ");
      console.log("Password:" + password + " " + "Email:" + email);
  
      try{
        axios.post('http://localhost:7000/login',{email,password}).then((res) => {
        console.log(res.data);
        navigate('/usersdata')
    })
    }
    catch(error){
        console.error("failed to login",error);
    }


      
    

    }

      
     
  };
    


    
  

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <form onSubmit={HandleSubmit}>
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          name={email}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          name={password}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={HandleSubmit} value={'Log in'} />
      </div>
      </form>
    </div>
  
  )
}

export default Loginpage;