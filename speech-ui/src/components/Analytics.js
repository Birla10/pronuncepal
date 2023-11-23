import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarGraphAnalytics from './BarGraphAnalytics';
import LineGraphAnalytics from './LineGraphAnalytics';
import { useEffect,useState } from 'react';
import axios from 'axios';
function Analytics(){
  const [lineGraph, setlineGraph] = useState([]);
  const [barGraph, setbarGraph] = useState([]);
    
    const email = sessionStorage.getItem('email')
    useEffect( () => { 
      async function fetchData() {
          try {
              const res = await axios.post('http://localhost:8080/analyticsLine',{email}); 
              setlineGraph(res.data);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  useEffect( () => { 
    async function fetchData() {
        try {
            const res = await axios.post('http://localhost:8080/analyticsBar',{email}); 
            setbarGraph(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, []);

    return(
        <>
        <Container>
      <Row>
        <Col>

            <LineGraphAnalytics lineData={lineGraph}/>

        </Col>
        <Col> <BarGraphAnalytics barData={barGraph} /></Col>
      </Row>

    </Container>
        </>
    )
}
export default Analytics;
