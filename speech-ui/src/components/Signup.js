import {useState} from 'react';
import "../style/signUp.css";
import NavBar from './NavBar';

function SignUp() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [retype, setRetype] = useState('');

    
    const setUser=(e)=>{
        setUsername(e.target.value)
    }
    const setMail=(e)=>{
        
        setEmail(e.target.value)
    }
    const setPass=(e)=>{
        setPassword(e.target.value)
    }
    const setRePass=(e)=>{
        setRetype(e.target.value)
    }

  return (
    <>
    <NavBar />
    <div className="login-container">
      <div className="login-form">
        
      <center><h1>SignUp</h1></center>
      <label htmlFor="username">Username *</label>
        <input
       
          type="text"
          id="username"
          value={username}
          onChange={setUser}
        /><label htmlFor="Email">Email *</label>
        <input
        
          type="text"
          id="Email"
          value={email}
          onChange={setMail} 
        /><label htmlFor="password">Password *</label>
        <input
          
          type="password"
          id="password"
          value={password}
          onChange={setPass}
        />

        <label htmlFor="retype">Re-Enter  Password *</label>
        <input
         
          type="password"
          id="retype"
          value={retype}
          onChange={setRePass}
        />
        <br/>
        <button >SignUp</button>
        <br/>
        <p>Already a User Login</p>
      </div>
    </div>
  </>
  );
}

export default SignUp;