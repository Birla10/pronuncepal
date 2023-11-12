import {useState} from 'react';
import {Link} from 'react-router-dom'
import "../style/signUp.css";
import NavBar from './NavBar';

function SignUp() {
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

    
    const setUser=(e)=>{
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
    const setMail=(e)=>{
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
    const setPass=(e)=>{
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
    const setRePass=(e)=>{
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
  
        alert("User Register Please Login")
        const signUpBackend = async () => {
        const result = await fetch('http://localhost:8080/login/'+ {username} + '/'+ {email} + '/'+ {password} + '/'+ {retype}  )
        const data = await result.json()
        console.log(data.hello + " Welcome! ")
      }
      
      signUpBackend()
      
      console.log('Logging in with username:', username, 'and password:', password);
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