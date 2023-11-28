
import NavBar from "./NavBar";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Practise from "./Practise";
import Analytics from "./Analytics";
import History from "./History";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from './Login'

import "../style/UserHome.css";
import Footer from "./Footer";

function UserHome(){
    const [key, setKey] = useState('practise');
    if(sessionStorage.getItem('email') === null){
      return(
        
      <Navigate to='/login'/>
      )
    }
    console.log(sessionStorage.getItem('email'))
    return(
        <>
            <NavBar />
            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="practise" title="Practise">
        <Practise />
      </Tab>
      <Tab eventKey="analystics" title="Analytics">
        <Analytics />
      </Tab>
      <Tab eventKey="history" title="History">
         {/* <History />  */}
        
      </Tab>
      
    </Tabs>
    <Footer>

    </Footer>
        </>
    )
}
export default UserHome;

