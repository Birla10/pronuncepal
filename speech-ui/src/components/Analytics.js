import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarGraphAnalytics from './BarGraphAnalytics';
import LineGraphAnalytics from './LineGraphAnalytics';
function Analytics(){
    return(
        <>
        <Container>
      <Row>
        <Col>

            <LineGraphAnalytics/>

        </Col>
        <Col> <BarGraphAnalytics></BarGraphAnalytics></Col>
      </Row>

    </Container>
        </>
    )
}
export default Analytics;
