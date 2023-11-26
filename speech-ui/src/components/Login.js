import { useState } from 'react';
import "../style/signUp.css";
import NavBar from './NavBar';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserHome from './UserHome';
import Footer from './Footer';


function Login() {
  const nagivation = useNavigate();
  const warnStyle = {
    borderColor:"red",
  }
  const normalStyle = {
    borderColor:"#ccc"
  }

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [emailCheck, setEmailCheck] = useState(false);
  const [passCheck, setPassCheck] = useState(false);

  const [userStyle, setUserStyle] = useState(normalStyle);
  const [passStyle, setPassStyle] = useState(normalStyle);

  const setUser = (e) => {

    setUsername(e.target.value)
    const regexUser = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regexUser.test(e.target.value)) {
      setUserStyle(normalStyle)
      setEmailCheck(true)
    }
    else {
      setUserStyle(warnStyle)
      setEmailCheck(false)
    }
  }
  const setPass = (e) => {
    setPassword(e.target.value)
    setPassword(e.target.value.trim())
    const regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (regexPass.test(e.target.value)) {
      setPassStyle(normalStyle)
      setPassCheck(true)
    }
    else {
      setPassStyle(warnStyle)
      setPassCheck(false)
    }
  }

  const handleLogin = async () => {
    try{
      const loginResponse = await axios.post('http://44.211.21.6:8080/login',{username,password})
      if(loginResponse.data === "Not a valid User"){
        alert("Wrong User name or Password")
      }
      else{
        sessionStorage.setItem('email',loginResponse.data.email)
        sessionStorage.setItem('name',loginResponse.data.name)
        console.log(loginResponse.data)
        nagivation('/userhome')
        
      }
    }
    catch(error){
      console.log(error)
    }
  }
  if(sessionStorage.getItem('email') === null){
  return (
    <>
      <NavBar />
      <div className="login-container">
        <div className="login-form">

          <center><h1>Login</h1></center>

          <label htmlFor="Email">Email *</label>
          <input
            style = {userStyle}
            type="text"
            id="Email"
            value={username}
            onChange={setUser}
          /><label htmlFor="password">Password *</label>
          <input
            style = {passStyle}
            type="password"
            id="password"
            value={password}
            onChange={setPass}
          />



          <br />
          <button onClick={handleLogin}>Login</button>
          <br />
          <p className='navigater'>Don't have an account ? <Link to="/signup" className='link' > SignUp </Link> </p>
        </div>
      </div>
      <Footer/>
    </>
  );
  }
  return(
    <Navigate to="/userhome"/>
    
  )
}

export default Login;