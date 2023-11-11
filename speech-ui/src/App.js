import SignUp from './components/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/UserHome'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userhome" element={<UserHome />} />


      </Routes>
    </BrowserRouter>

  
    </>
  );
}

export default App;
