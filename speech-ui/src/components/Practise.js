import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';
import Recording from "./Recording"
import Result from "./Results"
import SpinnerComp from './SpinnerComp';

function Practise() {
    const [results,setResults] = useState(null);
    const [input,setInput] = useState('');
    const [text,setText] = useState(false);
    const [spinner,setSpinner] = useState(false);
    if(spinner){
      return (
        <SpinnerComp />
      )
    }
    
    const inputChange = event => {
        if((event.target.value).trim() != ''){
          setText(true)
        }
        else{
          setText(false)
        }
        setInput(event.target.value);
    }
  return (
    <Container>
      <Row>
        <Col style={{"width":"60%","overflow":"hidden"}}>
        <br />
        <p>Type something and hit the mic button to start the recording</p>
        <br /><br />
        <center>
        <textarea id="w3review" 
                  name="w3review" 
                  value = {input}
                  onChange={inputChange}
                  rows="10" 
                  cols="50">
       </textarea>
       </center>
        <Recording input = {input} setResults={setResults} textBool={text} setSpinner = {setSpinner}/>
        </Col>
        <Col><Result results={results}/></Col>
      </Row>
      
    </Container>
  );
}
export default Practise;
