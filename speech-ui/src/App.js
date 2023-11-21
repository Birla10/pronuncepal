import SignUp from './components/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/UserHome'
import History from './components/History';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/history" element={<History />} />

      </Routes>
    </BrowserRouter>

  
    </>
  );
}

export default App;
