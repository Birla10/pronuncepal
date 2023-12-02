import Table from 'react-bootstrap/Table';
import '../style/history.css'
import { useEffect,useState } from 'react';
import axios from 'axios'

function History() {
  var count = 1;
  const [history,setHistory] = useState([])
  const mail = sessionStorage.getItem('email')

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      async function fetchData(){
        const res = await axios.post('https://44.211.21.6/history',{mail})
        setHistory(res.data)
      
      }
      fetchData(); 
    }, 5000);

    return () => clearInterval(interval);
  });

    return(
      <>
      <Table className="table" striped bordered hover>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Reference Text</th>
          <th>Recorded Audio</th>
          <th>Overall Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {
        history.map((record)=>(
          <tr key={count}>
          <td>{count++}</td>
          <td>{record.refText}</td>
          <td>{record.link}</td>
          <td>{record.score}</td>
          <td>{record.dateUpload}</td>
          
          </tr>
        ))
      }
      </tbody>
    </Table>
        </>
    )
}
export default History

