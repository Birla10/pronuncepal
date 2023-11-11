import {useState} from 'react';
import "../style/SignUp.css";
import NavBar from './NavBar';

function Login() {


   
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    
   
    const setMail=(e)=>{
        
        setEmail(e.target.value)
    }
    const setPass=(e)=>{
        setPassword(e.target.value)
    }
    

  return (
    <>
    <NavBar/>
    <div className="login-container">
      <div className="login-form">
        
      <center><h1>Login</h1></center>
      
        <label htmlFor="Email">Email *</label>
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

        
        
        <br/>
        <button >Login</button>
        <br/>
        <p>Don't have an account ? SignUp </p>
      </div>
    </div>
  </>
  );
}

export default Login;