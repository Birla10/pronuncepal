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
    useEffect(() => {
        const interval = setInterval(() => {
                async function fetchData() {
                    try {
                      
            const email = sessionStorage.getItem('email')
                        const res = await axios.post('https://44.211.21.6/analyticsLine',{email}); 
                        setlineGraph(res.data);
                    } catch (err) {
                        console.log(err);
                    }
                }
                fetchData();
                async function fetchBar() {
                  try {
                    
            const email = sessionStorage.getItem('email')
                      const res = await axios.post('https://44.211.21.6/analyticsBar',{email}); 
                      setbarGraph(res.data);
                  } catch (err) {
                      console.log(err);
                  }
              }
              fetchBar();
          
        }, 5000);
        return () => clearInterval(interval);
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
