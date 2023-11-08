import { useState } from 'react';

import "../style/UserHome.css";
import NavBar from "./NavBar"
function UserHome(auth){
    const [key, setKey] = useState('practise');
    console.log(auth)
    
      return (
        <>
        <NavBar/>
        <br /> 
        <center>User Home page design goes here.</center>
</>
    )
    
    
}
export default UserHome;