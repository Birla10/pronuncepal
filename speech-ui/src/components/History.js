import Table from 'react-bootstrap/Table';
import '../style/history.css'
import { useEffect,useState } from 'react';
import axios from 'axios'

function History() {
  var count = 1;
  const [history,setHistory] = useState([])
  const mail = localStorage.getItem('mail')
    useEffect(()=>{
      async function fetchData(){
        const res = await axios.get('https://44.211.21.6/history/'+mail)
        setHistory(res.data)
      
      }
      fetchData();
    })
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
          <td>{record.reference_text}</td>
          <td>{record.audio_file}</td>
          <td>{record.overall_score}</td>
          <td>{record.result_date}</td>
          
          </tr>
        ))
      }
      </tbody>
    </Table>
        </>
    )
}
export default History

