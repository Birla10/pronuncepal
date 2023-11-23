import Logo from '../images/logo.png'
import '../style/navBar.css'
import Login from './Login'
import SignUp from './Signup'

import { Link } from "react-router-dom";

function NavBar() {
  console.log(sessionStorage.getItem('email'))
  if(sessionStorage.getItem('email') === null){
    return(
      <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="logo" src={Logo} alt="Logo" />
            <span className="title">PRONUNCE PAL</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li>
                  <Link to="/login"> LOGIN </Link>
                </li>
                <li>
                  <Link to="/signup"> SIGNUP </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="logo" src={Logo} alt="Logo" />
            <span className="title">PRONUNCE PAL</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li>
                  <p>Welcome Back {sessionStorage.getItem('name')}</p>
                </li>
                
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
    
  );
}
export default NavBar;
