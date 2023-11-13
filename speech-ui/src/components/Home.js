import NavBar from "./NavBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import "../style/home.css";
import HomeImage from  "../images/home.jpg"
function Home() {
    return (
        <>
            <NavBar />
            <br /><br />
            <Container>
                <Row>
                    <Col>
                        <img className='home-image' src={HomeImage} />
                    </Col>
                    <Col>
                        <p className='text-home'>PRONUNCING <br />NOW MADE <br />EASY</p>
                        <Link to='/login'><button className='button-home'>LOGIN</button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;
