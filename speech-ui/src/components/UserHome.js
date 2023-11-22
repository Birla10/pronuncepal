
import NavBar from "./NavBar";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Practise from "./Practise";
import Analytics from "./Analytics";
import History from "./History";
import { useState } from "react";

import "../style/UserHome.css";

function UserHome(){
    const [key, setKey] = useState('practise');
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
        {/* <History /> */}
      </Tab>
      
    </Tabs>
        </>
    )
}
export default UserHome;

