import {useState} from 'react';
import "../style/signUp.css";
import {Link,useNavigate} from 'react-router-dom'
import NavBar from './NavBar';
import axios from "axios" 
import Footer from './Footer';
function SignUp() {
  const navigate = useNavigate();
  const warnStyle = {
    borderColor:"red",
  }
  const normalStyle = {
    borderColor:"#ccc"
  }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [retype, setRetype] = useState('');

    const [userCheck,setUserCheck] = useState(false);
    const [passCheck,setPassCheck] = useState(false);
    const [emailCheck,setEmailCheck] = useState(false);
    const [repassCheck,setRepassCheck] = useState(false);

    const [userStyle,setUserStyle] = useState(normalStyle);
    const [passStyle,setPassStyle] = useState(normalStyle);
    const [emailStyle,setEmailStyle] = useState(normalStyle);
    const [rePassStyle,setRePassStyle] = useState(normalStyle);
    
    const setUser = (e)=>{
      setUsername(e.target.value.trim())
      const regexUser = /^\w{5,100}/;
      if(regexUser.test(e.target.value)){
        setUserStyle(normalStyle)
        setUserCheck(true)
      }
      else{
      setUserStyle(warnStyle)
      setUserCheck(false)
      }
    }
    const setMail = (e)=>{
      setEmail(e.target.value.trim())
      const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(regexMail.test(e.target.value)){
        setEmailStyle(normalStyle)
        setEmailCheck(true)
      }
      else{
        setEmailStyle(warnStyle)
        setEmailCheck(false)
      }
    }
    const setPass = (e)=>{
      setPassword(e.target.value.trim())
      const regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      if(regexPass.test(e.target.value)){
        setPassStyle(normalStyle)
        setPassCheck(true)
      }
      else{
        setPassStyle(warnStyle)
        setPassCheck(false)
      }
    }
    const setRePass = (e)=>{
      setRetype(e.target.value.trim())
      if(password === e.target.value){
        setRePassStyle(normalStyle)
        setRepassCheck(true)      
      }
      else{
        setRePassStyle(warnStyle)
        setRepassCheck(false)     
      }
    }
   
    const handleSignUp = () => {
      if(userCheck && emailCheck && passCheck && repassCheck){
  
        
        const signUpBackend = async () => {
      const result = await axios.post('http://localhost:8080/signup',{email,username,password})
      if(result.data.Status === "User alraedy Found"){
        alert("Email already registered, Try another Mail Id")
        navigate("/login");
      }
      if(result.data.Status === "User Registration Successfull"){
        alert("User Registration Successfull please Login");
        navigate("/login");
      }
      console.log(result.data)
      }
      signUpBackend()
    }
        else{
        alert("Please Check the Red Warnings and fill the form Accordingly")
      }
    };

  return (
    <>
    <NavBar />
    <div className="login-container">
      <div className="login-form">
        
      <center><h1>SignUp</h1></center>
      <label htmlFor="username">Username *</label>
        <input
          style={userStyle}
          type="text"
          id="username"
          value={username}
          onChange={setUser}
        /><label htmlFor="Email">Email *</label>
        <input
          style={emailStyle}
          type="text"
          id="Email"
          value={email}
          onChange={setMail} 
        /><label htmlFor="password">Password *</label>
        <input
          style={passStyle}
          type="password"
          id="password"
          value={password}
          onChange={setPass}
        />

        <label htmlFor="retype">Re-Enter  Password *</label>
        <input
          style={rePassStyle}
          type="password"
          id="retype"
          value={retype}
          onChange={setRePass}
        />
        <br/>
        <button onClick={handleSignUp}>SignUp</button>
        
        <p className='navigater'>Already a User ?  <Link to="/login" className='link' > Login </Link> </p>
      </div>
    </div>
    <Footer/>
  </>
  );
}

export default SignUp;
