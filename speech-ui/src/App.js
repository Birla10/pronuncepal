import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import Home from './components/Home';
import UserHome from './components/UserHome';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
