import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Recording from "./recording"
import Result from "./results"

function Practise() {
  const [base64, setBase64] = useState('');
  const [input, setInput] = useState('');
  const inputChange = event => {
    setInput(event.target.value);
    console.log(event.target.value);
  }
  return (
    <Container>
      <Row>
        <Col>
          <br /><br /> <center>
            <label>Type something and hit the mic button to start the recording</label>
            <br /><br />

            <textarea id="w3review"
              name="w3review"
              value={input}
              onChange={inputChange}
              rows="10"
              cols="50">
            </textarea>
            <br />

            <Recording setBase64={setBase64} /> 
            </center>
        </Col>
        <Col><Result base64={base64} /></Col>
      </Row>

    </Container>
  );
}
export default Practise;