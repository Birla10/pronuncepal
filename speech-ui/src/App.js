
import SignUp from './components/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/UserHome'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/userhome" element={<UserHome />}></Route>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
