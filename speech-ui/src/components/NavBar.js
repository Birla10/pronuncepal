import Logo from '../images/logo.jpeg'
import '../style/navBar.css'
import Login from './Login'
import Signup from './Signup'

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li >
                                    Welcome! UserName
                                </li>
                                <li >
                                    <Link to="/login"> Login </Link>
                                </li>
                                <li >
                                    <Link to="/signup"> SignUp </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}
export default NavBar;